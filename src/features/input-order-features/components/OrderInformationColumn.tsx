interface OrderInformationColumnProps {
    title: string;
    text: string;
}

const OrderInformationColumn: React.FC<OrderInformationColumnProps> = ({ title, text }) => {
    return (
        <div className="pl-3 border-l border-black dark:border-slate-400">
            <div className="font-semibold">{title}</div>
            <div>{text || "-"}</div>
        </div>
    );
}
export default OrderInformationColumn;