import "./quantityBadge.scss";

interface Props {
  title: string;
  quantity: number;
}

const QuantityBadge = ({ title, quantity }: Props) => {
  return (
    <div className="quantity-badge">
      <span className="quantity-badge__number">{quantity}</span>
      <h6 className="quantity-badge__title">{title}</h6>
    </div>
  );
};

export default QuantityBadge;
