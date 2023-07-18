import { convertNumberToTimeString } from "../helpers/text-manipulation";
import { ControlBoardInterface } from "../types/control-board";
import Card from "./Card";

interface ContainerControlBoardProps {
    title: string
    data?: ControlBoardInterface[];
}

const ContainerControlBoard: React.FC<ContainerControlBoardProps> = ({ title, data }) => {
    return (
        <Card title={title}>
            <div className={`flex relative w-full overflow-auto scroll-smooth font-['Source_Sans_3'] dark:text-white snap-x snap-mandatory`}>
                <div className="sticky bg-white dark:bg-[#1e1e1e] left-0 flex flex-col items-center justify-center gap-2 p-3">
                    <span className="self-start font-semibold tracking-wide">Time</span>
                    <span className="self-start">Planning</span>
                    <span className="self-start">Actual</span>
                    <span className="self-start">Difference</span>
                    <span className="self-start w-28">Planning Cum</span>
                    <span className="self-start w-28">Actual Cum</span>
                    <span className="self-start">Different Cum</span>
                </div>
                {data?.map((planning) => (
                    <div key={`planning-${planning.planningTime}`} className="flex flex-col snap-center scroll-ml-32 md:scroll-ml-56 xl:scroll-ml-[18.4rem] items-center justify-center gap-2 p-3 hover:bg-slate-50 dark:hover:bg-[#272727] cursor-pointer">
                        <span className="w-24 font-semibold tracking-wider text-center">{convertNumberToTimeString(planning.planningTime)} - {convertNumberToTimeString(planning.planningTime + 1)}</span>
                        <span>{planning.planningQty}</span>
                        <span>{planning.totalOrderComplete}</span>
                        <span className={planning.totalOrderComplete - planning.planningQty < 0 ? `text-red-500` : ``}>{planning.totalOrderComplete - planning.planningQty}</span>
                        <span>{planning.planningQtyCumulative}</span>
                        <span>{planning.totalOrderCompleteCumulative}</span>
                        <span className={planning.differenceQty < 0 ? `text-red-500` : ``}>{planning.differenceQty}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default ContainerControlBoard;