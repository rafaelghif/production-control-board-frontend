import { IonApp, IonLoading, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";

import { useEffect } from "react";

import "./index.css";
import socket from "./libs/socket.io";
import MainRouter from "./routes/MainRouter";
import useLoadingStore from "./stores/useLoadingStore";
import "./theme/font.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
	const { isLoading } = useLoadingStore();
	useEffect(() => {
		socket.connect();
		return () => {
			socket.disconnect();
		};
	}, []);
	return (
		<IonApp>
			<IonLoading isOpen={isLoading} />
			<MainRouter />
		</IonApp>
	);
};

export default App;
