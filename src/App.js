import Hero from './components/Hero';
import Navigation from './components/Navigation';
import NewsAndOrientation from './components/NewsAndOrientation';
import OnlineClasses from './components/OnlineClasses';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero />
      <NewsAndOrientation />
      <OnlineClasses />
    </div>
  );
}

export default App;
