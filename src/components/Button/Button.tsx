import "./button.scss";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  text: string;
  styleName: Array<string>;
  type?: string;
};

const Button = ({ text, styleName, type }: Props) => {
  return (
    <button className={`button ${styleName.join(" ")}`}>
      {type === "left" && <MdKeyboardArrowLeft />}
      {text}
      {type === "right" && <MdKeyboardArrowRight />}
    </button>
  );
};

export default Button;
