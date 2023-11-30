import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsAndOrientation from "./components/NewsAndOrientation";
import OnlineClasses from "./components/OnlineClasses";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-2 p-sm-5">
        <Hero />
        <NewsAndOrientation />
        <OnlineClasses />
      </main>
        <Footer />
    </>
  );
}

export default App;
