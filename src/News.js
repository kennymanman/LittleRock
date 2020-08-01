
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Layout from "./Layout"
import Newsinfo from "./Newsinfo"
import art from "./Newspic/art.jpg"
import screen from "./Newspic/screen.jpg"
import coro from "./Newspic/coro.jpg"
import Rest from "./Rest"
function News(){
    return(
        <div className="fan">

            
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={screen} />
      </Grid.Column>
      <Grid.Column className="cv" width={13}>
        <h1 className="jc">NEWS AND EVENTS</h1>
        <p className="cj">Little Rock school invites friends, families, and Alumni to join us at our various philanthropic events throughout the year.<br/>
        As an independent school, we continue our founding traditions as a Notre Dame community. The heart of our mission is to educate leaders of character who will value and improve the world they inherit. Here in a warm, inclusive culture, every child is known, their God-given talents are valued and relationships flourish.</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={art} />
      </Grid.Column>
      <Grid.Column className="uy" width={10}>
      <h1 className="xs">SCHEDULE A ZOOM MEETING</h1>
        <br/>
        <p className="rut">We can't wait to meet you — virtually!
 
 A typical visit usually includes a tour of our school, an interview with a member of the admission team, and a parent/guardian wrap-up. That tends to be difficult to do while remaining six feet apart, but we don’t want that to stop us from getting to know you!</p>
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src={coro} />
      </Grid.Column>
    </Grid.Row>
  </Grid>

<br/><br/>


<Rest />
<br/>

         




</div>




)
    }

export default News