import Modal from "../../../components/Modal";
import useSelectLineRemarkStore from "../../../stores/useSelectLineRemarkStore";
import { useQueryRemarkControlBoard } from "../hooks/useQueryRemarkControlBoard";
import TableRemark from "./TableRemark";

interface ModalDetailRemarkProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalDetailRemark: React.FC<ModalDetailRemarkProps> = ({ isOpen, onDidDismiss }) => {
    const { selectedVal } = useSelectLineRemarkStore();
    const { data } = useQueryRemarkControlBoard(selectedVal.LineId, selectedVal.date);

    return (
        <Modal title="Remarks" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <TableRemark data={data} />
        </Modal>
    );
}

export default ModalDetailRemark;