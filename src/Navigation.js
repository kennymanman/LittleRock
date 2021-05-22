import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {NavLink,Link} from "react-router-dom"

function Navigation() {
    return (
        <div className="navy">

             <ReactBootStrap.Nav className="justify-content-center" activeKey="/home">

    <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/home">Home</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>

    <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/Programs">Programs</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>

    <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/News">News&Events</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>

    <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/Gallery">Gallery</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>

   <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/About"> About Us </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>

    <ReactBootStrap.Nav.Item>
      <ReactBootStrap.Nav.Link className="mau" href="/Contact">Contact Us</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav.Item>


  </ReactBootStrap.Nav>

        </div>
    )
}

export default Navigation
