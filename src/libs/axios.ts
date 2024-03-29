import axios from "axios";

import { getToken } from "../services";

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_APP_HOST,
	headers: {
		common: {
			"Content-Type": "application/json",
		},
	},
});

axiosClient.interceptors.request.use(
	(config) => {
		const accessToken = getToken();
		if (accessToken) {
			config.headers = Object.assign(
				{ Authorization: `Bearer ${accessToken}` },
				config.headers,
			);
		}
		return config;
	},
	(error) => {
		return error;
	},
);

export default axiosClient;
