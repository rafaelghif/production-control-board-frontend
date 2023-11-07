import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import queryClient from "./libs/react-query";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>,
);
