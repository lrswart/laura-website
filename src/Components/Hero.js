import "./Hero.css";

const Hero = ({imageSrc}) => {
   return ( 
      <div className="hero">
         <img src={imageSrc} alt="Hello" className="heroImage"/>
         <h2 className="heroTitle">Howdy</h2>
      </div>
    );
}
 
export default Hero;