import landingImg from '../Assets/backdrop.jpg';
import lauraImg from '../Assets/laura.jpg';
import droneImg from '../Assets/drone.jpg';
import Hero from './Hero';
import Slider from './Slider';

const Home = () => {
   return ( 
      <div>
         <Hero imageSrc={ landingImg } />
      
         <div className="components">
         <Slider 
         image={ lauraImg } 
         title ={ "Ahoy there!" } 
         subtitle={ "About me"}
         />
         <Slider 
         image={ droneImg } 
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
      </div>
    );
}
 
export default Home;