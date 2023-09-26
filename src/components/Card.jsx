import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <div className="image">
        <img src={data.images[0]} alt={data.title} />
      </div>
      <div className="description">
        <h3>{data.brand}</h3>
        <p>{data.description}</p>
        <div className="price">
          <h3>{data.price} €</h3>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
};

export default Card;
