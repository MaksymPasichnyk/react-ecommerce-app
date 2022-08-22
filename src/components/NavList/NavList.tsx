import "./navList.scss";
import NavListItem from "./NavListItem/NavListItem";
import { nanoid } from "nanoid";

type Props = {
  title: string;
  items: string[];
};

const NavList = ({ title, items }: Props) => {
  return (
    <div className="nav">
      <h4>{title}</h4>
      <ul className="nav-list">
        {items.map((item) => {
          return <NavListItem linkName={item} key={nanoid()} />
        })}
      </ul>
    </div>
  );
};

export default NavList;
