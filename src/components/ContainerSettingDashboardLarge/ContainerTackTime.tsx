interface ContainerTackTimeProps {
	fontSize: string;
	tackTime?: number;
}

const ContainerTackTime: React.FC<ContainerTackTimeProps> = ({
	fontSize,
	tackTime,
}) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="text-xl font-semibold border-b-2">Tact Time</span>
			<span className={`${fontSize} font-semibold text-white`}>
				{tackTime}
			</span>
		</div>
	);
};

export default ContainerTackTime;
