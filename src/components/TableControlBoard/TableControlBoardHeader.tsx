const TableControlBoardHeader: React.FC = () => {
	return (
		<thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" className="px-6 py-2">
					Time
				</th>
				<th scope="col" className="px-6 py-2">
					Plan
				</th>
				<th scope="col" className="px-6 py-2">
					Actual
				</th>
				<th scope="col" className="px-6 py-2">
					Difference
				</th>
				<th scope="col" className="px-6 py-2">
					Remark
				</th>
				<th scope="col" className="px-6 py-2">
					Break
				</th>
			</tr>
		</thead>
	);
};

export default TableControlBoardHeader;
