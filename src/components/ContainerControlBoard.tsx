import { Fragment, useEffect } from "react";
import { ControlBoardInterface } from "../types/control-board";
import { ControlBoardPlanningInterface } from "../types/control-board-planning-type";
import Card from "./Card";
import ContainerSettingDashboardLarge from "./ContainerSettingDashboardLarge";
import ColumnHeaderControlBoard from "./ColumnHeaderControlBoard";
import ColumnControlBoard from "./ColumnControlBoard";
import { IonButton } from "@ionic/react";
import useSelectLineRemarkStore from "../stores/useSelectLineRemarkStore";

interface ContainerControlBoardProps {
    title: string
    data?: ControlBoardInterface[];
    dateFilter: string;
    settings?: ControlBoardPlanningInterface;
    openModal: () => void;
}

const ContainerControlBoard: React.FC<ContainerControlBoardProps> = ({ title, data, dateFilter, settings, openModal }) => {
    const { setSelectedLine } = useSelectLineRemarkStore();

    const handleClickBtnRemarks = (date: string) => {
        let LineId = "";
        if (data && data?.length > 0) {
            LineId = data[0].LineId;
        }
        setSelectedLine({ LineId, date });
        openModal();
    }
    return (
        <Card title={title} optionButton={<IonButton fill="clear" onClick={() => handleClickBtnRemarks(dateFilter)}>Show Remarks</IonButton>}>
            <div className="flex flex-col gap-1">
                <div>
                    <ContainerSettingDashboardLarge data={settings} />
                </div>
                <div className={`grid grid-cols-6 relative w-full overflow-auto scroll-smooth font-['Source_Sans_3'] dark:text-white snap-x snap-mandatory`}>
                    {data?.map((planning, index) => (
                        <Fragment key={`planning-${planning.planningTime}`}>
                            {index % 5 === 0 && <ColumnHeaderControlBoard />}
                            <ColumnControlBoard data={planning} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default ContainerControlBoard;