import Navbar from "../Navbar/Navbar";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserAction from "../UserAction/UserAction";

// styles
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
			<Navbar />
			<div className="header__main flex justify-between">
				<Logo />
				<Search />
				<UserAction />
			</div>
    </header>
  );
};

export default Header;
