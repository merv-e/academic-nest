import campus from "../assets/others/campus.jpg";
import services from "../assets/others/student-services.jpg";
import WelcomeText from "./WelcomeText";
import InfoCard from "./InfoCard";
import orientation from "../assets/others/orientation.jpg"

const NewsAndOrientation = () => {
  return (
    <section className="container-fluid mt-4 pb-5" id="on-campus">
    <h2 className="py-4 px-1">Orientation and News</h2>
      <div className="row p-2 ">
        <WelcomeText />
        <div className="col-md-6 d-grid gap-4 pt-4 pt-md-0">
          <InfoCard
            image={orientation}
            title="Orientation Dates"
            date="August 15, 2023 - Freshman Orientation"
            description="Join us for an exciting orientation event for our newest students."
          />
          <InfoCard
            image={campus}
            title="Campus Information"
            description="Discover our vibrant campus located in the heart of the city."
          />
          <InfoCard
            image={services}
            title="More Information"
            description="Contact our student services for details about orientation and facilities."
          />
        </div>
      </div>
    </section>
  );
};

export default NewsAndOrientation;
