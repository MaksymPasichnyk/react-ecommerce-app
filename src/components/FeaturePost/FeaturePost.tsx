import "./featurePost.scss";
import Tag from "../ProductTags/Tag/Tag";

const FeaturePost = () => {
	return (
		<div className="feature-post">
			<Tag title="Dinner tips" />
			<div className="feature-post__img">
				<img />
			</div>
			<div className="feature-post__description">
				<p className="feature-post__text">
					Our chef tips for a great and tasty dinner ready in 20 minutes
				</p>
				<div className="feature-post__author-info">
					<div className="avatar">
						<img />
					</div>
					<h6>Author</h6>
					<div className="feature-post__date">
						<span>
							17.06.2020
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturePost