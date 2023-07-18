import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LineInterface } from "../types/line-type";

type LineType = Pick<LineInterface, "id" | "name">

interface LineState {
    line: LineType;
    setLine: (line: LineType) => void;
    clearLine: () => void;
}

const initialValue: LineType = {
    id: "",
    name: "",
}

const useLineStore = create<LineState>()(
    persist((set) => ({
        line: initialValue,
        setLine: (line) => set({ line }),
        clearLine: () => set({ line: initialValue })
    }), { name: "line" })
);


export default useLineStore;