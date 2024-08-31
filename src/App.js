import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import LandingHero2 from './components/LandingHero2';


function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <div className="container mx-auto px-3">
      </div>
      <div className='h-auto'>
        <LandingHero/>
        <LandingHero2/>
      </div>
      <Footer/>
    </div>
    


  );
}

export default App;