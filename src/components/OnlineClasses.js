import classesData from "../data";

const OnlineClasses = () => {
  return (
    <section className="container-fluid mt-4 pb-5" id="online">
      <h2>Explore Our Online Classes</h2>
      <p>
        Enroll in one of our online classes and embark on a journey of knowledge
        and discovery.
      </p>
      <div className="row">
        {classesData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                width="250"
                height="300"
                min-height="150"
                min-width="100"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#enroll" className="btn btn-primary">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p>Couldn't find what you're looking for? Discover more options.</p>
        <button className="btn btn-primary">Discover More</button>
      </div>
    </section>
  );
};

export default OnlineClasses;
