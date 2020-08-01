import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import Programs from './Programs'
import News from "./News"
import Achievements from "./Achievements"
import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import 'bootstrap/dist/css/bootstrap.min.css'


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
          <Route exact path="/Home" component={Home} />
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

export default App
