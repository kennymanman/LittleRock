import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import bun from "./image/bun.jpg"
import cont from "./image/cont.jpg"
import bout from "./image/bout.jpg"



function Card() {
    return (
      <div>

<ReactBootStrap.CardDeck>
  <ReactBootStrap.Card className="nun">
    <ReactBootStrap.Card.Img variant="top" src={bun} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>News&Events</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>





  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={cont} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Contact  Us</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>






  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Img variant="top" src={bout} />
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>About Us</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </ReactBootStrap.Card.Text>
      <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
</ReactBootStrap.CardDeck>
  
            
</div>


        
        
    )
}

export default Card
