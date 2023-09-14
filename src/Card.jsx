import './Card.css';

// eslint-disable-next-line react/prop-types
function Card({ title, imageUrl, description }) {
  return (
    <div className="card">
      <img className="card-img" src={imageUrl} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}


export default Card;