const ColumnHeaderControlBoard: React.FC = () => {
	return (
		<div className="text-2xl bg-white dark:bg-[#1e1e1e] flex flex-col items-center justify-center gap-2 p-3">
			<span className="self-start font-semibold tracking-wide">Time</span>
			<span className="self-start">Planning</span>
			<span className="self-start">Actual</span>
			<span className="self-start">Difference</span>
			<span className="self-start">Remark</span>
		</div>
	);
};

export default ColumnHeaderControlBoard;
