function ServiceCard({ title, description, image, href, accent, onSelect }) {
  return (
    <article className="service-card">
      <a href={href} target="_blank" rel="noreferrer" className="service-image-link">
        <img src={image} alt={title} />
      </a>

      <div className="service-card-body">
        <span className="service-accent">{accent}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="service-actions">
          <button type="button" className="service-button" onClick={onSelect}>
            View details
          </button>
          <a href={href} target="_blank" rel="noreferrer" className="service-link">
            Explore
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
