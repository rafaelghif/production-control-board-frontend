/* Optional CSS utils that can be commented out */
import { IonApp, IonLoading, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/palettes/dark.always.css";
import "@ionic/react/css/structure.css";

import { useEffect } from "react";

import "./index.css";
import { socket } from "./libs";
import MainRouter from "./routes/MainRouter";
import { useLoadingStore } from "./stores";
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
