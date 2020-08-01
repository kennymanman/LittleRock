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
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
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
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
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
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </ReactBootStrap.Media.Body>
  </ReactBootStrap.Media>
</ul>
</Layout>
        </div>
    )
}

export default Media
