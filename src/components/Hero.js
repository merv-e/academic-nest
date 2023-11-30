import library from "../assets/others/library.jpg";

const Hero = () => {
  return (
    <section className="container-fluid mt-5 pb-5 pt-5" id="hero">
      <div className="row p-2 ">
        <div className="col-lg-6 position-relative">
          <img
            src={library}
            alt="Welcome to the website"
            className="img-fluid custom-image"
          />
          <div className="overlay-text text-center text-md-left">
            <h1>Welcome to Academic Nest</h1>
            <h2>Your Gateway to Knowledge and Success!</h2>
          </div>
        </div>

        <div className="col-lg-6 d-flex justify-content-between align-items-center pt-4 pt-lg-0">
          <div className="hero-content">
            <h3 className="mb-3 text-center">
              Embark on Your Educational Odyssey with Academic Nest
            </h3>
            <p className="mb-3">
              At AcademicNest.net, we believe in the power of education to
              transform lives. Whether you prefer the flexibility of online
              learning or the vibrancy of on-campus experiences, we offer a
              seamless educational journey tailored just for you. Dive into a
              community where knowledge knows no boundaries, and your academic
              success is our priority. Join us in shaping a brighter future
              together!
            </p>
            <div className="d-flex justify-content-center p-2 gap-4">
              <button className="btn btn-primary">
                Explore Programs
                {/* <a href="#online">
                </a> */}
              </button>
              <button className="btn btn-primary">Join the Community</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
