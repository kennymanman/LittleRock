import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import Carousel from "./Carousel"

import Bottom from "./Bottom"
import { List, Header, Icon, Image } from 'semantic-ui-react'
import Container from "./Container"

import Media from "./Media"
import Staff from "./Staff"
import bug from "./img/bug.jpg"


//import Xan from "./Xan"




function Home() {
    return (
        <div >
         
            <Carousel />
            <br/>
            <hr/>
            <br/>
            <br/>


             <Media />
             <br/>
             
             <h2 className="bitch">We prepare our children for the future</h2>
             <br/>
            <Container/>
            <br/>
            <br/>
            <Bottom />

<div>
            <ReactBootStrap.Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <ReactBootStrap.Button variant="primary">Learn more</ReactBootStrap.Button>
  </p>
</ReactBootStrap.Jumbotron>
</div>  


            <br/>


            


 









            <br/>
            <br/>
            <hr/>
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
}

export default Home

 
