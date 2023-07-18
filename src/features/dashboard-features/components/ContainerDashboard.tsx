import { Suspense, lazy, useState } from "react";
import { IonInput, IonItem, IonRefresher, IonRefresherContent, IonSpinner, RefresherEventDetail, useIonRouter } from "@ionic/react";
import { formatDateString } from "../../../libs/date-fns";
import { useQueryControlBoard } from "../hooks/useQueryControlBoard";
import GridControlBoard from "../../../components/GridControlBoard";
import { useHistory } from "react-router";
import logo from "../../../assets/images/logo.png";

const SelectLine = lazy(() => import("../../../components/SelectLine"));

const ContainerDashboard: React.FC = () => {
    const { routeInfo } = useIonRouter();
    const history = useHistory();
    const [dateFilter, setDateFilter] = useState<string>(formatDateString(new Date()));
    const [lineFilter, setLineFilter] = useState<string>("none");

    const { data, isLoading, refetch } = useQueryControlBoard(lineFilter, dateFilter);

    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        refetch();
        event.detail.complete();
    }

    const handleClickBtnLogin = () => {
        history.push("/login");
    }

    return (
        <div className="relative h-screen w-full overflow-auto scroll-smooth bg-white dark:bg-[#121212]">
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent />
            </IonRefresher>
            <div className={`flex items-center justify-between px-5 py-1 shadow bg-[#f4f5f8] dark:bg-[#181818] ${routeInfo.pathname !== "/dashboard" ? "hidden" : ""} select-none`} hidden={routeInfo.pathname !== "/dashboard"}>
                <div className="flex items-center justify-center gap-3 font-['Source_Sans_3'] cursor-pointer">
                    <img src={logo} alt="Yokogawa Logo" className="w-10 h-auto" />
                    <span className="text-2xl font-semibold">Yokogawa</span>
                </div>
                <div className="text-blue-400 hover:text-blue-500">
                    <button className="px-5 py-2 tracking-wide" onClick={handleClickBtnLogin}>Login</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2 p-5">
                <div className="font-['Source_Sans_3']">
                    <span className="text-2xl font-bold">Production Control Board</span>
                </div>
                <div className="grid w-6/12 grid-cols-2 gap-3 p-5 rounded shadow xl:w-4/12 dark:bg-[#181818]">
                    <Suspense fallback={<IonSpinner />}>
                        <SelectLine value={lineFilter} onChange={(id) => setLineFilter(id)} />
                    </Suspense>
                    <IonItem>
                        <IonInput type="date" label="date" labelPlacement="floating" value={dateFilter} onIonChange={(e) => setDateFilter(e.detail.value!)} />
                    </IonItem>
                </div>
                <div className="w-full">
                    {isLoading
                        ? (<IonSpinner name="crescent" />)
                        : (<GridControlBoard data={data} />)
                    }
                </div>
            </div>
            <div className="absolute bottom-0 flex items-center justify-center w-full p-2">
                <span className="text-xs tracking-tight font-['Source_Sans_3']">Yokogawa Manufacturing Batam &copy; 2023</span>
            </div>
        </div>
    );
}

export default ContainerDashboard;