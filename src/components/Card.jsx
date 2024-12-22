import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ source, title, tags }) => {
    Card.propTypes = {
        source: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.node.isRequired,
      };
    
  return (
    <div>
      <div className="card-image-container">
        <img className="card-image" src={source} />
      </div>
      <p>{title}</p>
      <div className="card-tags-container">
        {tags.map((tag) => (
          <div className="card-tag" key={tag.id}>{tag}</div>
        ))}
      </div>
    </div>
  );
}
export default Card;
