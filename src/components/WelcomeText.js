import welcomeImage from "../assets/others/students-at-the-campus.jpg";

const WelcomeText = () => {
  return (
    <div className="col-md-6">
      <img
        src={welcomeImage}
        alt="Orientation"
        width="fit-content"
        height="300px"
        className="img-fluid custom-image"
      />
      <h3 className="pt-4">
        Unlock a World of Learning Opportunities, Where Online and On-Campus
        Education Converge.
      </h3>
      <p>
        At Academic Nest, we extend a warm welcome to all new and returning
        students. Our campus, nestled in the heart of the city, provides an
        inspiring backdrop for your academic journey. Explore our
        state-of-the-art facilities, vibrant student life, and the rich cultural
        tapestry that surrounds us. Embark on a learning adventure that knows no
        boundaries. Whether you prefer the traditional on-campus experience or
        the flexibility of online education, Academic Nest is your gateway to a
        world of knowledge and possibilities. Our dedicated faculty and
        cutting-edge resources are here to support your academic goals.
      </p>
    </div>
  );
};

export default WelcomeText;