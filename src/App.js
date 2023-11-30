import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import NewsAndOrientation from "./components/NewsAndOrientation";
import OnlineClasses from "./components/OnlineClasses";

function App() {
  return (
    <>
      <Navigation />
      <main className="p-2 p-md-5">
        <Hero />
        <NewsAndOrientation />
        <OnlineClasses />
        <Footer />
      </main>
    </>
  );
}

export default App;
