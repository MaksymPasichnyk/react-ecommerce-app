import "./layout.scss";

type Props = {
	children: JSX.Element|JSX.Element[],
}

const Layout = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Layout;
