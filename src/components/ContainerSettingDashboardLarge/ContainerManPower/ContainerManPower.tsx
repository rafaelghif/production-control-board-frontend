import { IonSpinner } from "@ionic/react";

import { Suspense, lazy } from "react";

const ContainerAdditional = lazy(() => import("./ContainerAdditional"));
const ContainerRegular = lazy(() => import("./ContainerRegular"));
const ContainerSpare = lazy(() => import("./ContainerSpare"));

interface ContainerManPowerProps {
	fontSize: string;
	manPowerCount?: number;
	manPowerAdditionalCount?: number;
	manPowerAbleToSpare?: number;
}

const ContainerManPower: React.FC<ContainerManPowerProps> = ({
	fontSize,
	manPowerCount,
	manPowerAdditionalCount,
	manPowerAbleToSpare,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-5/12">
			<span className="text-xl font-semibold text-center border-b-2">
				Man Power Required
			</span>
			<div className="grid grid-cols-3">
				<Suspense fallback={<IonSpinner name="dots" />}>
					<ContainerRegular
						fontSize={fontSize}
						manPowerCount={manPowerCount}
					/>
					<ContainerAdditional
						fontSize={fontSize}
						manPowerAdditionalCount={manPowerAdditionalCount}
					/>
					<ContainerSpare
						fontSize={fontSize}
						manPowerAbleToSpare={manPowerAbleToSpare}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default ContainerManPower;
