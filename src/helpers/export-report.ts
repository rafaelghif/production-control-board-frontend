import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import * as fs from "fs";
import { formatDateString, formatDateTime } from "../libs/date-fns";
import { OrderWithLineInterface } from "../types/order-type";

export const ExportExcel = (apiData: OrderWithLineInterface[], fileName: string) => {
	const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
	const fileExtension = ".xlsx";

	XLSX.set_fs(fs);

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

	const worksheet = XLSX.utils.json_to_sheet(newData);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
	XLSX.writeFile(workbook, fileName + "-" + formatDateString(new Date()) + fileExtension, { compression: true });
}