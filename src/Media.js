import React from 'react'
import masktwo from "./image/masktwo.jpg"
import learn from "./image/learn.jpg"
import * as ReactBootStrap from "react-bootstrap"
import Layout from "./Layout"
import yell from "./image/yell.jpg"

function Media() {
    return (
        <div className="bvn">
           <Layout>
           <ul className="list-unstyled">
  <ReactBootStrap.Media className="yun" as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={masktwo}
      alt="Generic placeholder"
    />
    <ReactBootStrap.Media.Body>
      <h5 className="nb">Fighting the Covid-19</h5>
      <p className="cj"  >
        Due to the Covid-19 pandemic, Little Rock School has taken various steps and measures to provide a safe and healthy learning environment for our pupils. Hand sanitizers and washing areas are provided with the aid of face-masks or face-shields.
      </p>
    </ReactBootStrap.Media.Body>
  </ReactBootStrap.Media>
  <br/>
  <br/>

  <ReactBootStrap.Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={learn}
      alt="Generic placeholder"
    />
    <ReactBootStrap.Media.Body>
      <h5 className="nb">Online classes</h5>
      <p className="cj">
        Little Rock School online classes/virtual learning helps your child learn while at home, the school provides reading materials such as videos, images, documented lessons to ensure your child continues to grow intellectually.
      </p>
    </ReactBootStrap.Media.Body>
  </ReactBootStrap.Media>
<br/>
<br/>

  <ReactBootStrap.Media className="kun" as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={yell}
      alt="Generic placeholder"
    />
    <ReactBootStrap.Media.Body>
      <h5 className="nb">Registration</h5>
      <p className="cj">
        Enrolling your child into Little Rock School requires you to visit our school in person, We are delighted to answer any questions you may have about registration. For more info contact the school for details.
      </p>
    </ReactBootStrap.Media.Body>
  </ReactBootStrap.Media>
</ul>
</Layout>
        </div>
    )
}

export default Media
