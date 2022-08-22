import Tag from "../ProductTags/Tag/Tag";
import "./blogPost.scss";

type Props = {
  type?: string;
};

const BlogPost = ({ type }: Props) => {
  const classNames = [];

  if (type === "small") {
    classNames.push("small");
  }

  return (
    <div className={`blog-post ${classNames}`}>
      <div className="blog-post__img">
        <img />
      </div>
      {!classNames.includes("small") && <Tag title="Vegetable" />}
      <div className="blog-post__description">
        <p className="blog-post__text">
          Which vegetable your family will love and want’s eat each day
        </p>
        <div className="blog-post__author-info">
          <h6>Author</h6>
          <div className="feature-post__date">
            <span>17.06.2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
