import React from 'react'

import Carousel from "./Carousel"

import Bottom from "./Bottom"
import { List, Header, Icon, Image } from 'semantic-ui-react'
import Container from "./Container"

import Media from "./Media"


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

 
