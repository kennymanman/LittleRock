import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { List } from 'semantic-ui-react'
import art from "./Newspic/art.jpg"


function Rest() {
    return (
        <div className="newt">
           <ReactBootStrap.CardDeck>
  <ReactBootStrap.Card>
    
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Little Rock School Resumption</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
          12th September, 2020 <br/>
          <br/>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">12th September, 2020</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>






  <ReactBootStrap.Card color="primary">
    
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Prefect Election Day</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      18th September, 2020 <br/>
          <br/>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">18th September, 2020</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>







  <ReactBootStrap.Card>
    
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title>Prefect Announcement</ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      20th September, 2020 <br/>
          <br/>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted">20th September, 2020</small>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
</ReactBootStrap.CardDeck>
        </div>
    )
}

export default Rest
