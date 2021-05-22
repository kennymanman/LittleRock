import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from "./Navigation"
import Programs from './Programs'
import News from "./News"

import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from "./Carousel"
import Bottom from "./Bottom"
import { List, Image } from 'semantic-ui-react'
import Container from "./Container"
import * as ReactBootStrap from "react-bootstrap"
import Nic from "./Staffimg/Nic.jpg"
import Fort from "./Staffimg/Fort.jpg"
import kod from "./Staffimg/kod.JPG"
import Media from "./Media"
import './App.css'






function App(){

  return(
    

 <div> 

  <nav  style={{backgroundColor: "#1f68cf"}}>

  <h1 style={{color: "whitesmoke",
              textAlign: "center",
              fontFamily: "sans-serif"  }}>
              LITTLE ROCK SCHOOL
              </h1>


  <h2 style={{color: "whitesmoke",
              textAlign: "center",
              fontFamily: "sans-serif"  }}>
              Lagos . Abuja . Owerri
              </h2>

  </nav>

 <Navigation />                                                                                 {/*Navigation Function that was imported*/}
    
         
  <Router>                                                                                      {/*Routes*/}
  <Switch>

  <Route exact path="/" exact component={Home} />
  <Route exact path="/home" exact component={Home} />
  <Route  path="/Programs" component={Programs} /> 
  <Route  path="/News" component={News} />
  <Route  path="/Gallery" component={Gallery} />                          
  <Route  path="/About" component={About } />
  <Route  path="/Contact" component={Contact} />
          
  </Switch>
  </Router>
    

</div>

  )
}




function Home() {
 return (
 <div >
       
<Carousel />                                                                              {/*Imported component Carousel*/}
<Media />                                                                                {/*Imported component Media*/}
           
<h2 style={{textAlign: "center",
           marginTop:30,
           marginBottom:30 }}>
           We prepare our children for the future
           </h2>
           
<Container/>                                                                             {/*Imported component Container*/}



<h1 style={{marginTop:20,
            marginLeft:200,
            marginBottom:25}}>
            Meet Our Staff
            </h1>


 <ReactBootStrap.Row style={{marginLeft:190, marginBottom:70}} >

    <ReactBootStrap.Col xs={3} >
      <ReactBootStrap.Image style={{width:300, height:300}} src={Fort} thumbnail />
      <h4>Mrs Comfort Ogundiya</h4>
      <p style={{ color:"black"}} >
    Head Teacher of Little Rock School Lagos State.
      </p>
    </ReactBootStrap.Col>


    <ReactBootStrap.Col xs={3} >
      <ReactBootStrap.Image style={{width:300, height:300}} src={Nic} thumbnail />
      <h4>Mr Nicholas Okafor</h4>
      <p style={{ color:"black"}} >
    Head Teacher of Little Rock School Imo State.
     </p>
    </ReactBootStrap.Col>



    <ReactBootStrap.Col xs={3} >
      <ReactBootStrap.Image style={{width:300, height:300}} src={kod} thumbnail />
      <h4>Okafor Ekene</h4>
      <p style={{ color:"black"}} >
    Head of Little Rock school I.T department.
       </p>
    </ReactBootStrap.Col>


    </ReactBootStrap.Row>










 <Bottom/>
 <hr/>
  <p style={{textAlign: "center"}}>
  Powered by The August Tech
  <br/>
  <List bulleted horizontal link>
  <List.Item as='a'>Terms and Conditions</List.Item>
  <List.Item as='a'>Privacy Policy</List.Item>
  <List.Item as='a'>Contact Us</List.Item>
  </List>
  </p>
       
          

</div>
)
}





export default App
