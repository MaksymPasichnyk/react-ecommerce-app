type Props = {
	children: JSX.Element|JSX.Element[], 
}

const BlogPostList = ({ children }: Props) => {
	return (
		<div className="blog-post-list">
			{children}
		</div>
	)
}

export default BlogPostList