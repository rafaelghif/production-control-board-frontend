import { utils, writeFile, set_fs } from "xlsx";
import * as fs from "fs";
import { formatDateString, formatDateTime } from "../libs/date-fns";
import { OrderWithLineInterface } from "../types/order-type";

export const ExportExcel = (apiData: OrderWithLineInterface[], fileName: string) => {
	const fileExtension = ".xlsx";

	set_fs(fs);

	let no = 0;
	const newData = apiData.map((res) => {
		no += 1;
		return {
			"No": no,
			"Model": res.model,
			"Serial Number": res.serialNumber,
			"Sap Linkage No.": res.sapLinkageNo,
			"Line": res.Line.name,
			"CreatedBy": res.createdBy,
			"CreatedAt": formatDateTime(res.createdAt)
		};
	});

	const worksheet = utils.json_to_sheet(newData);
	const workbook = utils.book_new();
	utils.book_append_sheet(workbook, worksheet, "Report");
	writeFile(workbook, fileName + "-" + formatDateString(new Date()) + fileExtension, { compression: true });
}