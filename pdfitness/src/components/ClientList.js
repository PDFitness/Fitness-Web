import React, { Component } from 'react';
import {Glyphicon, ListGroup, ListGroupItem, Button, ButtonToolbar, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

class ClientList extends Component {
constructor(props) {
  super(props);
  this.state = {
    clientArray : [
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false},
      {image: "star", name: "Ervin Ding", selected: false}
    ]
  }

  this.handleClientOnClick = this.handleClientOnClick.bind(this)
}




renderClients(client, index) {
  index = index + 1
  return (
    <ToggleButton value={index} onClick={(e) => this.handleClientOnClick(index, e)}>
      <Glyphicon glyph={client.image}/>
      {client.name} 
    </ToggleButton>
  )
}

handleClientOnClick(index, e) {
  //alert(this.state.clientArray[index-1].name);
  let clientArrayNew = this.state.clientArray;
  clientArrayNew[index-1].selected = true;
  this.setState(this.state.clientArray=clientArrayNew);
}

  render() {
    return (
      <div >
        <ButtonToolbar vertical block>
          <ToggleButtonGroup vertical block type="checkbox">
            {this.state.clientArray.map(this.renderClients.bind(this))}
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default ClientList;
