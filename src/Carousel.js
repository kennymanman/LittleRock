
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
import brew from "./Schoolimg/brew.png"
import magic from "./Schoolimg/magic.png"
import ragic from "./Schoolimg/ragic.png"
import xar from "./Schoolimg/xar.png"
import nar from "./Schoolimg/nar.png"
import oli from "./Schoolimg/oli.png"




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
            src={nar}
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
            src={hain}
            alt="Third slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Safe and secure environment</h3>
            <p>
              Security measures are ensured for a safe environment.
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
          
            src= {magic}
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
            src={xar}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Experience the best</h3>
            <p>When young children start school, they bring an innate sense of curiosity, wonder and excitement.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>







        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={oli}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Our children the roots of our future</h3>
            <p>The joy and instinctive sense of wonder and delight.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
















        <ReactBootStrap.Carousel.Item className="mas">
          <img
            className="d-block w-100"
            src={ragic}
            alt="Second slide"
          />
  
          <ReactBootStrap.Carousel.Caption>
            <h3>Interactive classroom learning</h3>
            <p>Interactivity among our pupils is encouraged to enable them grow not only academically but socially.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>



        
      </ReactBootStrap.Carousel>

      </div>
      </div>
    );
  }



  export default ControlledCarousel

  
  