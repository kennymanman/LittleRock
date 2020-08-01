import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemExampleHeaders = () => (
    <div>
    <h2>Achievements</h2>
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>Best Common Entrance Performance</Item.Header>
      </Item.Content>
    </Item>
<br/>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' content='Best Inter-house sports performance' />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content header='Watchmen' verticalAlign='middle' />
    </Item>
  </Item.Group>
  </div>
)

export default ItemExampleHeaders