import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__row flex justify-between">
        <div className="navbar__contacts flex">
          <a className="link" href="#">Chat with us</a>
          <p className="text">+420 336 775 664</p>
          <p className="text">info@freshnesecom.com</p>
        </div>
        <div className="navbar__nav flex">
          <a className="link" href="#">Blog</a>
          <a className="link" href="#">About us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
