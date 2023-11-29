const InfoCard = ({ image, title, date, description }) => {
  return (
    <div className="col d-flex p-2 justify-content-between  align-items-center mb-4">
      <img src={image} alt={title} width="150px" height="150px" />
      <div>
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{description}</p>
        <button className="text-primary btn btn-transparent">Read more</button>
      </div>
    </div>
  );
};

export default InfoCard;