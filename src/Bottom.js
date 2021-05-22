import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import Layout from "./Layout"
import { Message } from 'semantic-ui-react'

const DividerExampleVertical = () => (
    <Layout>

  <Segment className="juli" >
    <Grid columns={2} relaxed='very' >
      <Grid.Column  className="bull">
        <h2>Have questions?</h2> 
        <br/>
        <h5>Contact us</h5>
        <List>
    <List.Item>
      <List.Icon name='phone square' />
      <List.Content>Lagos Branch:     08038420083</List.Content>
    </List.Item>

<List.Item>
      <List.Icon name='phone square' />
      <List.Content>Owerri Branch: 08081466668</List.Content>
    </List.Item>



   
    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>Lagos Branch: Littlerockschool2005@gmail.com</a>
      </List.Content>
    </List.Item>


    <List.Item>
      <List.Icon name='mail' />
      <List.Content>
        <a href='mailto:jack@semantic-ui.com'>Owerri Branch: Littlerockschool@gmail.com</a>
      </List.Content>
    </List.Item>



    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.semantic-ui.com'>About Us</a>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.semantic-ui.com'>More Info</a>
      </List.Content>
    </List.Item>
  </List>
      </Grid.Column>








      <Grid.Column>
        <h2 className="mark">
          Visit us
        </h2>
        <br/>
        <List>
    <List.Item>
      <List.Icon name='users' />
      <List.Content>Little Rock schools</List.Content>
    </List.Item>
<br/>

    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Little Rock School,92, Lanre Awolokun Gbagada phase 2, lagos</List.Content>
    </List.Item>

<br/>

    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Little Rock School, 5, School Road opposite Cradle hotel, Works Layout, Owerri-Imo State.</List.Content>
    </List.Item>


    
  </List>

     
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>

  
  <Message className="bail"
    icon='inbox'
    header='Have you heard about our mailing list?'
    content='Get the best news in your e-mail every day.'
  />

  </Layout>
)

export default DividerExampleVertical
