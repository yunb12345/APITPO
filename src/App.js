import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import LandingHero2 from './components/LandingHero2';


function App() {
  return (
    <div className="overflow-x-hidden mx-auto">
      <Navbar/>
      <LandingHero/>
      <LandingHero2/>
      <Footer/>
    </div>
    


  );
}

export default App;