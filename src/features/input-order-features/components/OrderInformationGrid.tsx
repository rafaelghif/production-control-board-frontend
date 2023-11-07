interface OrderInformationGridProps {
	children: React.ReactNode;
}

const OrderInformationGrid: React.FC<OrderInformationGridProps> = ({
	children,
}) => {
	return (
		<div className="grid grid-cols-2 gap-4 p-5 font-['Source_Sans_3']">
			{children}
		</div>
	);
};
export default OrderInformationGrid;
