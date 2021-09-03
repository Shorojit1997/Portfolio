
import './App.css';
import Introduction from './Component/Body/Introduction';
import Skillset from './Component/Body/Skillset';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Particle from './Component/Particle/Particle';
import ParticleText from './Component/Particle/ParticleText';
import Portfolio from './Component/Portfolio/Portfolio';
import BottomFooter from './Component/Footer/FooterBottom'  

function App() {

  return (
    <div className="App" id='home'>
      <Navbar />
      <div className='_first'>
        <ParticleText />
        <Particle />
      </div>
      <h1 className='text-decoration-underline m-3 mb-4' id='about'> About Me</h1>
      <Introduction />
      <Skillset/>
      <Portfolio/>
      <Footer/>
      <BottomFooter/>

    </div>
  );
}

export default App;
