type Props = {
	linkName: string,
}

const NavListItem = ({linkName}: Props) => {
	return (
		<li>
			<a className="link">{linkName}</a>
		</li>
	)
}

export default NavListItem