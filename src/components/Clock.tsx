import { useEffect, useState } from "react";

import { formatDateLongString, formatTimeString } from "../libs";

const Clock: React.FC = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="text-center font-['Source_Sans_3']">
			<div className="tracking-tight">
				{formatDateLongString(currentTime)}
			</div>
			<div className="text-sm font-semibold tracking-tight">
				{formatTimeString(currentTime)}
			</div>
		</div>
	);
};

export default Clock;
