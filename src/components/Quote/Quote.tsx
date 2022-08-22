import "./quote.scss";

const Quote = () => {
  return (
    <figure className="quote">
      <div className="quote__inner">
        <blockquote className="quote__body">
          <p className="quote__text">
            “This is an super space for your customers qoute. Don’t worry it
            works smooth as pie. You will get all what you need by writiing a
            text here “
          </p>
        </blockquote>
				<figcaption className="quote__username">
					Bob Akawadumba
				</figcaption>
				<div className="quote__user-avatar">
					<img />
				</div>
      </div>
    </figure>
  );
};

export default Quote;
