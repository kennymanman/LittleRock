import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from "./Navigation"
//import Home from "./Home"
import Programs from './Programs'
import News from "./News"
import Achievements from "./Achievements"
import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from "./Carousel"
import Bottom from "./Bottom"
import { List, Header, Icon, Image } from 'semantic-ui-react'
import Container from "./Container"
import * as ReactBootStrap from "react-bootstrap"
import Nic from "./Staffimg/Nic.jpg"
import Fort from "./Staffimg/Fort.jpg"
import Media from "./Media"



import './App.css'



function App(){
  return(

   <div className="main"> 
      <nav className="pyt">
        <h1 className="mani">LITTLE ROCK SCHOOL</h1>
        <h2 className="mani">Lagos . Abuja . Owerri</h2>
      </nav>
      <Navigation />
    
      
      <Router>
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/home" exact component={Home} />
          <Route  path="/Programs" component={Programs} /> 
          <Route  path="/News" component={News} />
          <Route  path="/Achievements" component={Achievements} />
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


<h1 style={{marginTop:20, marginLeft:179, marginBottom:25}}>Meet Our Staff</h1>
<div style={{flexDirection:"row", display:"flex"}}>




<ReactBootStrap.Jumbotron style={{marginRight:10, marginLeft:179, borderRadius:25, height:310, backgroundColor:"#ff7f08"}}>

<Image src={Fort} style={{borderRadius:1000, width:170, marginLeft:57, height:170, marginRight:0}} />

<h4 style={{textAlign:"center", marginTop:15, paddingRight:0, paddingLeft:0, color:"white"}}> Mrs Ogundiya Comfort</h4>
<p style={{ color:"white", textAlign:"center"}} >
    Head Teacher of Little Rock School Lagos State.
  </p>
  
</ReactBootStrap.Jumbotron>




<ReactBootStrap.Jumbotron style={{marginRight:30, marginLeft:40, borderRadius:25, height:310, backgroundColor:"#ff7f08"}}>

<Image src={Nic} style={{borderRadius:1000, width:170, marginLeft:60, height:170, marginRight:30}} />

<h4 style={{textAlign:"center", marginTop:15, paddingRight:0, paddingLeft:0, color:"white"}}> Mr Okafor Nicholas</h4>
<p style={{ color:"white", textAlign:"center"}} >
    Head Teacher of Little Rock School Imo State.
  </p>
  
</ReactBootStrap.Jumbotron>
















<ReactBootStrap.Jumbotron style={{marginRight:30, marginLeft:25, borderRadius:25, height:310, backgroundColor:"#ff7f08"}}>

<Image src={Fort} style={{borderRadius:1000, width:170, marginLeft:55, height:170, marginRight:50}} />

<h4 style={{textAlign:"center", marginTop:15, paddingRight:0, paddingLeft:0, color:"white"}}> Okafor Ekene</h4>
<p style={{ color:"white", textAlign:"center"}} >
    Head of Little Rock I.T department.
  </p>
  
</ReactBootStrap.Jumbotron>









</div>
<br/>
<br/>
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





export default App
