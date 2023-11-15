import Modal from "../../../components/Modal";
import { useSelectLineRemarkStore } from "../../../stores";
import { useQueryRemarkControlBoard } from "../hooks";
import TableRemark from "./TableRemark";

interface ModalDetailRemarkProps {
	isOpen: boolean;
	onDidDismiss: () => void;
}

const ModalDetailRemark: React.FC<ModalDetailRemarkProps> = ({
	isOpen,
	onDidDismiss,
}) => {
	const { selectedVal } = useSelectLineRemarkStore();
	const { data } = useQueryRemarkControlBoard(
		selectedVal.LineId,
		selectedVal.date,
	);

	return (
		<Modal title="Remarks" isOpen={isOpen} onDidDismiss={onDidDismiss}>
			<TableRemark data={data} />
		</Modal>
	);
};

export default ModalDetailRemark;
