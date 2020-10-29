import React, {useState} from "react"
import * as ReactBootStrap from "react-bootstrap"
import rue from "./image/rue.jpg"
import use from "./image/use.jpg"
import pencilc from "./image/pencilc.jpg"
import Layout from "./Layout"
import pikin from "./Pics/pikin.jpg"



function ControlledCarousel() {
    
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
          
          <div>
      <ReactBootStrap.Carousel  activeIndex={index} onSelect={handleSelect}>
    
        <ReactBootStrap.Carousel.Item className="mas">

         
         <img
            className="d-block w-100"
          
            src= {pikin}
            alt="First slide"
            
          />


          <ReactBootStrap.Carousel.Caption>
            <h3>Little Rock Environment</h3>
            <p>A safe and serene learning environment for your kids.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>




        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={rue}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Experience our virtual classes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>

        
        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={pencilc}
            alt="Third slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>
      </div>
      </div>
    );
  }



  export default ControlledCarousel
