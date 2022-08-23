import "./heading.scss";
import { BsGrid3X3 } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";

type Props = {
  title: string;
};

const green = "#6A983C";

const Heading = ({ title }: Props) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <div className="view-bar">
        <ul className="view-bar__list flex">
          <li className="view-bar__item active">
            <BsGrid3X3 color={green} />
            <h6>Grid view</h6>
          </li>
          <li className="view-bar__item">
            <BsListUl color={green} />
            <h6>List view</h6>
          </li>
          <li className="view-bar__item">
            <span className="product-quantity">117</span>
            <h6>Products</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
