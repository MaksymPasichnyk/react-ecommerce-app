import FeaturePost from "../FeaturePost/FeaturePost";
import Heading from "../Heading/Heading";
import "./blogSection.scss";
import BlogPost from "../BlogPost/BlogPost";
import BlogPostList from "../BlogPostList/BlogPostList";

const BlogSection = () => {
  return (
    <div className="blog-section">
      <Heading title="Read our blog posts" btnTitle="Go to blog" />
      <div className="blog-section__body">
        <FeaturePost />
        <BlogPost />
        <BlogPostList>
          <BlogPost type="small" />
          <BlogPost type="small" />
          <BlogPost type="small" />
        </BlogPostList>
      </div>
    </div>
  );
};

export default BlogSection;
