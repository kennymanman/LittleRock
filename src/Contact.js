import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Grid, Image, List } from 'semantic-ui-react'
import bon from "./img/bon.jpg"
import phone from "./Contactk/phone.jpg"
import Form from "./Form"
import direct from "./Pics/direct.jpg" 
import dug from "./img/dug.jpg"




{/*export default function Contact(){
  return(



<div>

<h1 style={{marginTop:35, fontSize:50, marginLeft:120, marginBottom:50}}>Contact Us</h1>



<div style={{ flexDirection:"row", display:"flex"}}>

  

<div style={{marginLeft:120, right:900}}>
<Form />
  </div>

 


<List style={{}}>
    <List.Item>
      <h4>Lagos Info</h4>
      <List.Icon name='users' />
      <List.Content>Little Rock School</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>92, Lanre Awolokun Gbagada phase 2, Lagos. Nigeria</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>littlerock@gmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='phone' />
      <List.Content>
        <p>08038420083</p>
      </List.Content>
    </List.Item>
    </List>
  

</div>


</div>

  )
} */}




















const GridExampleColumnWidth = () => (
  <div className="rem">

<img style={{position:"absolute", height:550}}
            className="d-block w-100"
            src={bon}
            
          />


    <br/>
  <Grid>
    
    <Grid.Column width={0}>
      
    </Grid.Column>
    <Grid.Column width={7}>
      <h1 className="kin" style={{color:"white"}}>Contact Us</h1>
     <Form />
    </Grid.Column>
    <Grid.Column width={5}>
      <br/>
    <List>
    <List.Item>
      <h4 style={{color:"white"}}>Lagos Info</h4>
      <List.Icon name='users' />
      <List.Content style={{color:"white"}}>Little Rock School</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='marker' />
      <List.Content style={{color:"white"}}>92, Lanre Awolokun Gbagada phase 2, Lagos. Nigeria</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>littlerockschool2005@gmail.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='phone' />
      <List.Content>
        <p style={{color:"white"}}>08038420083</p>
      </List.Content>
    </List.Item>


    <br/>

    <br/>
    
    <List.Item>
      <h4 style={{color:"white"}}>Owerri Info</h4>
      <List.Icon name='users' />
      <List.Content style={{color:"white"}}>Little Rock School</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='marker' />
      <List.Content style={{color:"white"}}> 5, School Road opposite Cradle hotel, Works Layout, Owerri-Imo State. Nigeria.</List.Content>
    </List.Item>
    
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>littlerockschoolow@yahoo.com</a>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='phone' />
      <List.Content>
        <p style={{color:"white"}}>08081466668</p>
      </List.Content>
    </List.Item>
  </List>
    </Grid.Column>
  </Grid>

  <br/>
<br/>




         
  </div>
)

export default GridExampleColumnWidth 