import { create } from "zustand";
import { persist } from "zustand/middleware";

import { formatDateString } from "../libs";
import { getLine } from "../services";
import { RemarkControlBoardPayloadInterface } from "../types";

type SelectLineRemarkType = RemarkControlBoardPayloadInterface;

interface SelectLineRemarkState {
	selectedVal: SelectLineRemarkType;
	setSelectedLine: (selectLine: SelectLineRemarkType) => void;
}

const initialValue: SelectLineRemarkType = {
	LineId: getLine(),
	date: formatDateString(new Date()),
};

const useSelectLineRemarkStore = create<SelectLineRemarkState>()(
	persist(
		(set) => ({
			selectedVal: initialValue,
			setSelectedLine: (selectedLine) =>
				set({ selectedVal: selectedLine }),
		}),
		{ name: "SelectLineRemark" },
	),
);

export default useSelectLineRemarkStore;
