export interface ControlBoardInterface {
    LineId: string;
    planningDate: string;
    planningTime: number;
    planningSequence: number;
    planningQty: number;
    planningQtyCumulative: string;
    totalOrderComplete: number;
    totalOrderCompleteCumulative: number;
    differenceQty: number;
}

export interface ControlBoardWithLineInterface {
    lineName: string;
    plannings: ControlBoardInterface[];
}