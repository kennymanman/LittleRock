
import React, {useState} from "react"
import * as ReactBootStrap from "react-bootstrap"
import rue from "./image/rue.jpg"
import use from "./image/use.jpg"
import pencilc from "./image/pencilc.jpg"
import Layout from "./Layout"
import learn from "./image/learn.jpg"
import hain from "./Pics/hain.jpg"
import dass from "./Pics/dass.jpg"
import kill from "./image/kill.jpg"
import two from "./Schoolimg/two.jpg"
import four from "./Schoolimg/four.jpg"


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
            src={hain}
            alt="Third slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Care and responsibility</h3>
            <p>
              We offer optimum care to ensure the safety of our children .
            </p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      



<ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={kill}
            alt="Third slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Fun Extra-curricular activities</h3>
            <p>
              Learn while having fun at our school.
            </p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      










        <ReactBootStrap.Carousel.Item className="mas">

        <img
            className="d-block w-100"
          
            src= {two}
            alt="First slide"
            
          />


          <ReactBootStrap.Carousel.Caption>
            <h3>The right school for your kids.</h3>
            <p>British curriculum standard and e-learning classes..</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>




        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={learn}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Experience our virtual classes</h3>
            <p>Learn virtually and enjoy interactive sessions.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>





        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={four}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Experience our virtual classes</h3>
            <p>Learn virtually and enjoy interactive sessions.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>



        
      </ReactBootStrap.Carousel>

      </div>
      </div>
    );
  }



  export default ControlledCarousel

  
  