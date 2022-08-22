import NavList from "../NavList/NavList";
import ProductTags from "../ProductTags/ProductTags";
import "./footer.scss";

const contacts = ["About us", "Careers", "Press Releases", "Blog"];
const socials = ["Facebook", "Instagram", "Twitter", "Youtube", "LinkedIn"];
const earnings = ["Become an Affiliate", "Advertise your product", "Sell on Market"];
const account = ["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <NavList title="Get in Touch" items={contacts} />
        <NavList title="Connections" items={socials} />
        <NavList title="Earnings" items={earnings} />
        <NavList title="Account" items={account} />
      </div>
			<ProductTags />
    </footer>
  );
};

export default Footer;
