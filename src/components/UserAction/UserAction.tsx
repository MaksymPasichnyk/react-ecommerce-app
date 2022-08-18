import { AiOutlineUser } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import "./userAction.scss";

const UserAction = () => {
	return (
		<div className="user-action">
			<div className="user-action__btn flex-center">
				<AiOutlineUser />
			</div>
			<div className="user-action__btn flex-center">
				<BiBasket />
				<span className="order-quantity flex-center">0</span>
			</div>
		</div>
	)
}

export default UserAction