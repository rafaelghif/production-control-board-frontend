import { Redirect } from "react-router";

import Strict from "../pages/Strict";
import { useUserStore } from "../stores";

interface PrivateRouteProps {
	component: React.FC;
	isAuth: boolean;
	isStrictRole?: boolean;
	roles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
	component: Component,
	isAuth,
	isStrictRole = false,
	roles,
}) => {
	const { user } = useUserStore();
	const isAllow = isStrictRole ? roles?.includes(user.role) || false : true;
	return isAuth === false ? (
		<Redirect to="/login" />
	) : isAllow === true ? (
		<Component />
	) : (
		<Strict />
	);
};

export default PrivateRoute;
