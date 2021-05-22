import React from 'react'

import * as ReactBootStrap from "react-bootstrap"
import {Button} from "react-bootstrap"





function Newsinfo(){
  return(

<ReactBootStrap.Accordion>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Header>
      <ReactBootStrap.Accordion.Toggle as={Button} variant="link" >
        Little Rock School Resumption
      </ReactBootStrap.Accordion.Toggle>
    </ReactBootStrap.Card.Header>
    <ReactBootStrap.Accordion.Collapse eventKey="0">
      <ReactBootStrap.Card.Body>August 6th 2020 little rock </ReactBootStrap.Card.Body>
    </ReactBootStrap.Accordion.Collapse>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    <ReactBootStrap.Card.Header>
      <ReactBootStrap.Accordion.Toggle as={Button} variant="link" eventKey="1">
        Staff resumption day
      </ReactBootStrap.Accordion.Toggle>
    </ReactBootStrap.Card.Header>
    <ReactBootStrap.Accordion.Collapse eventKey="1">
      <ReactBootStrap.Card.Body>bnfbmnmnmdhshmhn</ReactBootStrap.Card.Body>
    </ReactBootStrap.Accordion.Collapse>
  </ReactBootStrap.Card>
</ReactBootStrap.Accordion>

  )
}

export default Newsinfo