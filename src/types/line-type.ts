export interface LineInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    DepartmentId: string;
}

export type CreateLineType = Pick<LineInterface, "name" | "DepartmentId">;
export type UpdateLineType = Partial<LineInterface>;