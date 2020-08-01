import React from 'react'
import { Grid, Image, List } from 'semantic-ui-react'
import phone from "./Contactk/phone.jpg"
import Form from "./Form"
import direct from "./Pics/direct.jpg" 

const GridExampleColumnWidth = () => (
  <div className="rem">
    <br/>
  <Grid>
    
    <Grid.Column width={4}>
      <Image src={direct} />
    </Grid.Column>
    <Grid.Column width={7}>
      <h1 className="kin">Contact Us</h1>
     <Form />
    </Grid.Column>
    <Grid.Column width={5}>
      <br/>
    <List>
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
        <p> +234 885858933</p>
      </List.Content>
    </List.Item>


    <br/>


    <List.Item>
      <h4>Abuja Info</h4>
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
        <p> +234 885858933</p>
      </List.Content>
    </List.Item>

    <br/>
    <List.Item>
      <h4>Owerri Info</h4>
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
        <p> +234 885858933</p>
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