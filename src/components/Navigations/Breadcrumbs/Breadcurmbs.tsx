import "./breadcrumbs.scss";

const Breadcrumbs = () => {
	return (
		<div className="breadcrumbs">
			<ul className="breadcrumbs__list">
				<li className="breadcrumbs__item">
					<a className="link">
						Homepage
					</a>
				</li>
				<li className="breacrumbs__item">
					<span className="breadcrumbs-slash">/</span>
					<a className="link active">Fruit and vegetables</a>
				</li>
			</ul>
		</div>
	)
}

export default Breadcrumbs