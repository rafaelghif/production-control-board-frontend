import { getPtrMonthly } from "@/services";
import * as fs from "fs";
import { set_fs, utils, writeFile } from "xlsx";

import { formatDateString, formatDateTime } from "../libs";
import { ControlBoardInterface, PtrPerLineInterface } from "../types";
import { OrderWithLineInterface } from "../types";
import { FormattedDay } from "../utils/date";
import { convertNumberToTimeString } from "./text-manipulation";

interface DataItemInterface {
	No: number;
	Model: string;
	[key: string]: number | string;
}

export const ExportExcel = (
	apiData: OrderWithLineInterface[],
	fileName: string,
) => {
	const fileExtension = ".xlsx";

	set_fs(fs);

	let no = 0;
	const newData = apiData.map((res) => {
		no += 1;
		return {
			No: no,
			Model: res.model,
			"Serial Number": res.serialNumber,
			"Sap Linkage No.": res.sapLinkageNo,
			Line: res.Line.name,
			CreatedBy: res.createdBy,
			CreatedAt: formatDateTime(res.createdAt),
		};
	});

	const worksheet = utils.json_to_sheet(newData);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Report");
	writeFile(
		workbook,
		fileName + "-" + formatDateString(new Date()) + fileExtension,
		{ compression: true },
	);
};

export const ExportExcelReportOutput = (
	apiData: ControlBoardInterface[],
	lineName: string,
	fileName: string,
) => {
	const fileExtension = ".xlsx";

	set_fs(fs);

	let no = 0;
	const newData = apiData.map((res) => {
		no += 1;
		return {
			No: no,
			"Line Name": lineName,
			"Planning Date": res.planningDate,
			"Planning Time": `${convertNumberToTimeString(
				res.planningTime,
			)} - ${convertNumberToTimeString(res.planningTime + 1)}`,
			"Planning Qty": res.planningQty,
			"Planning Qty Cumulative": res.planningQtyCumulative,
			"Actual Qty": res.totalOrderComplete,
			"Actual Qty Cumulative": res.totalOrderCompleteCumulative,
			remark: res.remark,
		};
	});

	const worksheet = utils.json_to_sheet(newData);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Report-Output");
	writeFile(
		workbook,
		fileName + "-" + formatDateString(new Date()) + fileExtension,
		{ compression: true },
	);
};

export const ExportExcelPtr = (
	data: PtrPerLineInterface[],
	days: FormattedDay[],
) => {
	const models = Array.from(
		new Set(data?.map((ptrData) => ptrData.model).sort()),
	);

	const datas: DataItemInterface[] = generateDataItems(models, data, days);
	const fileExtension = ".xlsx";

	set_fs(fs);

	const worksheet = utils.json_to_sheet(datas);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Report-Output");

	writeFile(
		workbook,
		`PTR - ${formatDateString(new Date())}${fileExtension}`,
		{ compression: true },
	);
};

export const ExportAllExcelPtr = async (
	month: number,
	year: number,
	days: FormattedDay[],
) => {
	const data = await getPtrMonthly(month, year);
	const models = Array.from(
		new Set(data?.map((ptrData) => ptrData.model).sort()),
	);

	const datas: DataItemInterface[] = generateDataItems(models, data, days);
	const fileExtension = ".xlsx";

	set_fs(fs);

	const worksheet = utils.json_to_sheet(datas);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Report-Output");

	writeFile(
		workbook,
		`PTR All line- ${formatDateString(new Date())}${fileExtension}`,
		{ compression: true },
	);
};

const generateDataItems = (
	models: string[],
	data: PtrPerLineInterface[],
	days: FormattedDay[],
): DataItemInterface[] => {
	let no = 0;
	return models.map((model) => {
		const newData: DataItemInterface = { No: no++, Model: model };
		days.forEach((day) => {
			newData[day.date] =
				data?.find(
					(res) =>
						res.model === model &&
						res.createdDay.toString().padStart(2, "0") === day.day,
				)?.total ?? 0;
		});
		return newData;
	});
};
