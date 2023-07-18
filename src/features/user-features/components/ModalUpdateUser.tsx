import { Suspense, lazy, useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem, IonSelect, IonSelectOption, IonSpinner } from "@ionic/react";
import { UpdateUserType, UserInterface } from "../../../types/user-type";
import { useUpdateUser } from "../hooks/useUpdateUser";

const SelectDepartment = lazy(() => import("../../../components/SelectDepartment"));
const SelectLineByDepartment = lazy(() => import("../../../components/SelectLineByDepartment"));

interface ModalUpdateUserProps {
    isOpen: boolean;
    data?: UserInterface;
    onDidDismiss: () => void;
}

const ModalUpdateUser: React.FC<ModalUpdateUserProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateUserType>({});
    const { mutate } = useUpdateUser();

    const handleInput = (key: keyof UpdateUserType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleChangeDepartment = (id: string) => {
        setFormData((prevState) => ({ ...prevState, DepartmentId: id }));
        setFormData((prevState) => ({ ...prevState, LineId: "" }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, badgeId: data?.badgeId, password: data?.password, name: data?.name, role: data?.role, inActive: data?.inActive, DepartmentId: data?.DepartmentId, LineId: data?.LineId }));
    }, [data]);

    return (
        <Modal title="Update User" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} disabled required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Badge Id" labelPlacement="floating" value={formData?.badgeId} onIonInput={(e) => handleInput("badgeId", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="password" label="Password" labelPlacement="floating" value={formData?.password} onIonInput={(e) => handleInput("password", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonSelect value={formData?.role} onIonChange={(e) => handleInput("role", e.detail.value!)}>
                        <IonSelectOption value="Basic">Basic</IonSelectOption>
                        <IonSelectOption value="Admin">Admin</IonSelectOption>
                        <IonSelectOption value="Super User">Super User</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectDepartment value={formData?.DepartmentId} onChange={(id) => handleChangeDepartment(id)} />
                    {formData.DepartmentId && <SelectLineByDepartment value={formData?.LineId} departmentId={formData?.DepartmentId} onChange={(id) => handleInput("LineId", id)} />}
                </Suspense>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateUser;