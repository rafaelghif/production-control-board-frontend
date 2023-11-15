interface ContainerTackTimeProps {
	tackTime?: number;
}

const ContainerTackTime: React.FC<ContainerTackTimeProps> = ({ tackTime }) => {
	return (
		<div className="flex flex-col justify-between gap-1 text-center basis-3/12">
			<span className="font-semibold border-b-2">Tact Time</span>
			<span className="text-xs font-semibold">{tackTime}</span>
		</div>
	);
};

export default ContainerTackTime;