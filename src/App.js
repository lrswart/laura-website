import './App.css';
import landingImg from './Assets/backdrop.jpg';
import Hero from './Components/Hero';
import Slider from './Components/Slider';
import NavBar from './Components/NavBar';

const NavBarLinks = [
  { url: "#", title: "Home"},
  { url: "#", title: "About"},
  { url: "#", title: "Projects"}
];

function App() {
  return (
    <div className="App">
      <NavBar navBarLinks={ NavBarLinks } />
      <Hero imageSrc={landingImg} />
      <Slider 
      image={ landingImg } 
      title ={ "Ahoy there!" } 
      subtitle={ "About me"}
      />
      <Slider 
      image={ landingImg } 
      title ={ "SkyFox Project" } 
      subtitle={ "FieldFox on a Drone"}
      flipped={true}
      />
      <Slider 
      image={ landingImg } 
      title ={ "Volunteering" } 
      subtitle={ "Current and past volunteer involvement"}
      />
    </div>
    
  );
}

export default App;
