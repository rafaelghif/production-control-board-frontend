export interface UserInterface {
    id: string;
    badgeId: string;
    password: string;
    name: string;
    role: "Super User" | "Admin" | "Basic";
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    DepartmentId: string;
    LineId: string;
}

export interface UserWithDepartmentAndLineInterface extends UserInterface {
    Department: {
        id: string;
        name: string;
    };
    Line: {
        id: string;
        name: string;
    };
}

export type CreateUserType = Pick<UserInterface, "badgeId" | "password" | "name" | "role" | "DepartmentId" | "LineId">;
export type UpdateUserType = Partial<UserInterface>;