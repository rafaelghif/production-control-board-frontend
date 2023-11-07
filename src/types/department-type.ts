export interface DepartmentInterface {
	id: string;
	name: string;
	abbreviation: string;
	inActive: boolean;
	createdBy: string;
	updatedBy: string;
	createdAt: string;
	updatedAt: string;
}

export type CreateDepartmentType = Pick<
	DepartmentInterface,
	"name" | "abbreviation"
>;
export type UpdateDepartmentType = Partial<DepartmentInterface>;
