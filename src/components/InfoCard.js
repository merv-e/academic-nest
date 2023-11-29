const InfoCard = ({ image, title, date, description }) => {
  return (
    <div className="d-flex">
      <img
        src={image}
        alt={title}
        width="350px"
        height="200px"
      />
      <div className="d-flex flex-column px-4 justify-content-start align-items-start flex-wrap">
        <h4>{title}</h4>
        {date && <p className="text-muted">{date}</p>}
        <p>{description}</p>
        <button className="text-primary btn btn-transparent p-0">Read more</button>
      </div>
    </div>
  );
};

export default InfoCard;
