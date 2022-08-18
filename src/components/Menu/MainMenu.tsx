import React from "react"
import { ReactComponent as ArrDownIcon } from "../../assets/icons/ar-down.svg";
import "./mainMenu.scss";
import { nanoid } from 'nanoid'

const MainMenu = () => {
	const menuItems = [
		"Bakery",
		"Fruit and vegetables",
		"Meat and fish",
		"Drinks",
		"Kitchen",
		"Special nutrition",
		"Baby",
		"Pharmacy",
	]

	const menuElements = menuItems.map(menuItem => {
		return (
			<li key={nanoid()} className="main-menu__item">
				<a className="main-menu__link">{menuItem}</a>
				{/*<ArrDownIcon />*/}
				<ArrDownIcon />
			</li>
		)
	})

	return (
		<div className="main-menu">
			<ul className="main-menu__list">
				{menuElements}
			</ul>
		</div>
	)
}

export default MainMenu;