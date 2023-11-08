import { ControlBoardInterface, ShiftType } from "../types/control-board";
import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";
import Card from "./Card";
import ContainerSettingDashboardLarge from "./ContainerSettingDashboardLarge";
import TableControlBoard from "./TableControlBoard";

interface ContainerControlBoardProps {
	title: string;
	data?: ControlBoardInterface[];
	shiftFilter: ShiftType;
	settings?: ControlBoardPlanningInterface;
}

const ContainerControlBoardV2: React.FC<ContainerControlBoardProps> = ({
	title,
	data,
	shiftFilter,
	settings,
}) => {
	return (
		<Card title={title}>
			<div className="flex flex-col gap-1">
				<div>
					<ContainerSettingDashboardLarge
						data={settings}
						shiftFilter={shiftFilter}
					/>
				</div>
				<div>
					<TableControlBoard data={data} shiftFilter={shiftFilter} />
				</div>
			</div>
		</Card>
	);
};

export default ContainerControlBoardV2;
