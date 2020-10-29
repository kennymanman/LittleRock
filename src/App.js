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
import par from "./Staffimg/par.jpg"
import pin from "./Staffimg/pin.jpg"
import Media from "./Media"



import './App.css'



function App(){
  return(

   <div className="main"> 
      <nav className="pyt">
        <h1 className="mani">LITTLE ROCK NURSERY & PRIMARY SCHOOL</h1>
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




<ReactBootStrap.Jumbotron style={{marginRight:30, marginLeft:179, borderRadius:25, height:350, backgroundColor:"#ff7f08"}}>

{/*<img style={{position:"absolute", height:400, width:10}}
            className="d-block w-30"
            src={pin}
            
  />*/}



<Image src={par} style={{borderRadius:1000, width:170, marginLeft:65, height:170}} />

<h4 style={{textAlign:"center", marginTop:15, paddingRight:100, paddingLeft:100, color:"white"}}> Mrs Ogundiya Comfort</h4>
<p style={{ color:"white"}} >
    Head Teacher of Little Rock School LagosState.
  </p>
  
</ReactBootStrap.Jumbotron>








<ReactBootStrap.Jumbotron style={{marginRight:50, marginLeft:20, borderRadius:25, height:350, backgroundColor:"#fc7b03"}}>

<Image src={par} style={{borderRadius:1000, width:170, marginLeft:62, height:170}} />
    
<h4 style={{textAlign:"center", marginTop:15, paddingRight:125, marginLeft:95, color:"white"}}>Mr Okafor Nicholas</h4>
 <p style={{color:"white"}}>
   Head Teacher of Little Rock School Imo State
  </p>
 
</ReactBootStrap.Jumbotron>








<ReactBootStrap.Jumbotron style={{marginRight:179, marginLeft:5, borderRadius:25, height:350, backgroundColor:"#fc7b03"}}>

<Image src={par} style={{borderRadius:1000, width:170, marginLeft:59, height:170}} />

<h4 style={{textAlign:"center", marginTop:35, paddingLeft:110, paddingRight:100, marginRight:20, color:"white"}}> Okafor Ekene</h4>
<p style={{marginTop:10, marginLeft:25 , color:"white"}}>
    Head of Little Rock School I.C.T team
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
