import React, {useState} from 'react'
import Layout from "./Layout"
import vack from "./img/vack.jpg"

import * as ReactBootStrap from "react-bootstrap"
import  {List} from "semantic-ui-react"
import los from "./Schoolimg/los.png"
import pos from "./Schoolimg/pos.png"
import bos from "./Schoolimg/bos.png"
import gos from "./Schoolimg/gos.png"
import kos from "./Schoolimg/kos.png"
import rli from "./Schoolimg/rli.png"



export default function Gallery() {


  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  return(
    <div
    
    style={{ 
      backgroundImage: "url("+vack+ ")",
      backgroundSize: "cover",
      height: "105vh"}}
    >
<Layout>
      

      
<h1 style={{marginTop:30,
             fontSize:50,
              position:"relative",
              color:"white"}}>
              Gallery
              </h1>




<h3 style={{marginTop:20,
            position:"relative",
            color:"white"}}>
            Little Rock School Environment
            </h3>

<ReactBootStrap.Carousel  activeIndex={index} onSelect={handleSelect}>




<ReactBootStrap.Carousel.Item className="mas">
<img
className="d-block w-100"
src= {los}
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
src= {pos}
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
src= {bos}
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
src= {gos}
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
src= {rli}
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
src= {kos}
alt="First slide"
        
/>
<ReactBootStrap.Carousel.Caption>
<h3>Little Rock Environment</h3>
<p>A safe and serene learning environment for your kids.</p>
</ReactBootStrap.Carousel.Caption>
</ReactBootStrap.Carousel.Item>

</ReactBootStrap.Carousel>






</Layout>


<p className="lamb" style={{marginTop:40}}>
   Powered by The August Tech
<br/>
<List className="nub" bulleted horizontal link>
<List.Item as='a'>Terms and Conditions</List.Item>
<List.Item as='a'>Privacy Policy</List.Item>
<List.Item as='a'>Contact Us</List.Item>
</List>
</p>




</div>

  )
}

















{/*export default function Gallery() {
    return (
        <div className="fg">

        <img  style={{position:"absolute", height:1350}}
            className="d-block w-100"
            src={dex} 
          />
              <h1 className="rey" style={{position:"relative"}}>
     Our Gallery
  </h1>
<br/>
  <h2 className="rey">
     <ReactBootStrap.Badge variant="primary" style={{position:"relative"}}>Our School</ReactBootStrap.Badge>
  </h2>
          <Dan />  
 <br/>
          <br/><br/>
  <h2 className="rey">
     <ReactBootStrap.Badge variant="primary" style={{position:"relative"}}>Our Excursions</ReactBootStrap.Badge>
  </h2>
          <Dan /> 
<br/>
<br/>




          <p className="lamb">Powered by The August Tech
            <br/>
            <List className="nub" bulleted horizontal link>
    <List.Item as='a'>Terms and Conditions</List.Item>
    <List.Item as='a'>Privacy Policy</List.Item>
    <List.Item as='a'>Contact Us</List.Item>
  </List>
            </p>

        </div>
    )
}*/}

