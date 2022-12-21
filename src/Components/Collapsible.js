import { useState } from "react";
import './Collapsible.css';

const Collapsible =(props)=>{

    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

    return(
        
        <div>
            <div>
                <button onClick={toggle} className='collapsible'>{props.label}</button>
            </div>
            {open &&
            <div className="toggle">{props.children}</div>
            }
        </div>
    )
}
export default Collapsible;
