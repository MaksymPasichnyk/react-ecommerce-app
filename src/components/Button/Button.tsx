import "./button.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  text: string;
  styleName: Array<string>;
  type?: string;
};

const Button = ({ text, styleName, type }: Props) => {
  return (
    <button className={`button ${styleName.join(" ")}`}>
      {type === "leftArrowBefore" && <MdKeyboardArrowLeft />}
      {text}
      {type === "rightArrowAfter" && <MdKeyboardArrowRight />}
			{type === "downArrowAfter" && <MdKeyboardArrowDown />}
    </button>
  );
};

export default Button;
