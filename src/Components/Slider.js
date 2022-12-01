import { useInView } from 'react-intersection-observer';
import "./Slider.css";

const Slider = ({image, title, subtitle, flipped}) => {


   const { ref, inView } = useInView({
      /* Optional options */
      threshold: .4,
   });
   

   const renderContent = () => {
      if (!flipped) {
         return <>
         <div className="slider-tile">
            <img src={ image } alt="" className="slider-img"/>
            <div className="slider-content">
               <h1 className="slider-title">{ title }</h1>
               <p>{ subtitle }</p>
            </div>
         </div>
        
         </>
      }
      else {
         return <>
         <div className="slider-tile">
            <div className="slider-content">
               <h1 className="slider-title">{ title }</h1>
               <p>{ subtitle }</p>
            </div>
            <img src={ image } alt="" className="slider-img"/>
         </div>
         
         </>
      }
   }

   return ( 
      <div className={ inView ? "Slider slider-zoom" : "Slider"} ref={ref}>
      {/* <div className="slider?" ref={ref}> */}
         { renderContent() }
      </div>
    );
}
 
export default Slider;