const InfoCard = ({ image, title, date, description }) => {
  return (
    <div className="d-flex flex-column flex-lg-row gap-3 pr-3 gap-lg-4">
      <img
        src={image}
        alt={title}
        width="350px"
        height="200px"
        className="img-fluid-md custom-image-md info-card-img"
        min-height="150"
        min-width="100"
      />
      <div className="d-flex flex-column  justify-content-start align-items-start flex-wrap">
        <h4>{title}</h4>
        {date && <p className="text-muted">{date}</p>}
        <p>{description}</p>
        <button className="text-primary btn btn-transparent p-0">
          Read more
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
