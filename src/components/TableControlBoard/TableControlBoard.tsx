import { ControlBoardInterface } from "../../types";
import TableControlBoardBody from "./TableControlBoardBody";
import TableControlBoardHeader from "./TableControlBoardHeader";

interface TableControlBoardProps {
	data?: ControlBoardInterface[];
}

const TableControlBoard: React.FC<TableControlBoardProps> = ({ data }) => {
	return (
		<table className="w-full text-xl text-center text-gray-500 dark:text-gray-400">
			<TableControlBoardHeader />
			<TableControlBoardBody data={data} />
		</table>
	);
};

export default TableControlBoard;
