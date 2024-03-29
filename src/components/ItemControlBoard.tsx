interface ItemControlBoard {
	text: string;
	isHeader: boolean;
	left?: boolean;
	center?: boolean;
}
const ItemControlBoard: React.FC<ItemControlBoard> = ({
	text,
	isHeader = false
}) => {
	return <span className={`${isHeader ? "" : ""}`}>{text}</span>;
};

export default ItemControlBoard;
