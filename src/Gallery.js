import React from 'react'
import Dan from "./Dan"
import * as ReactBootStrap from "react-bootstrap"
import  {List} from "semantic-ui-react"

export default function Gallery() {
    return (
        <div className="fg">
              <h1 className="rey">
     Our Gallery
  </h1>
<br/>
  <h2 className="rey">
     <ReactBootStrap.Badge variant="primary">Our School</ReactBootStrap.Badge>
  </h2>
          <Dan />  
 <br/>
          <br/><br/>
  <h2 className="rey">
     <ReactBootStrap.Badge variant="primary">Our Excursions</ReactBootStrap.Badge>
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
}

