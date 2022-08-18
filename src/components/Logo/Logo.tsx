import { ReactElement } from "react";
import logoImg from "../../assets/img/Freshnesecom.png";
import "./logo.scss";

const Logo = (): ReactElement => {
	return (
		<div className="logo flex-center">
			<img src={logoImg} />
		</div>
	)
}

export default Logo