import React, { Component } from 'react';

import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';

import {
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

class InventarioAltasView extends Component {
        //  state = {  }
  titulo = "Inventario de laboratorio de Electrónica";
  inventarios = ["10 Arduino Uno", 
    "10 Arduino Mega", 
    "10 Arduino Due"];

  frmNoControl = React.createRef();
  frmNombre = React.createRef();

  addinventario = event => {
    event.preventDefault();
    this.maestros.push(this.frmNombre.value);
    this.forceUpdate();
  };

    render() { 
        return ( 
            <div className="App-content">
                
                <form autoComplete="off" onSubmit={this.addMaestro}>    
                    <TextField
                        label="No. de Item"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNoControl = e)}
                    />
                    &nbsp;&nbsp;
                    <TextField
                        label="Nombre"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNombre = e)}
                    />
                    <Fab
                    color="primary"
                    size="medium"
                    //className="dish-form-icon"
                    onClick={this.addinventario}
                    >
                    <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.inventarios.map((inventario) => (
                        <ListItem button key={inventario}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={inventario} />
                        </ListItem>
                    ))}
                </List>
            </div>
         );
    }
}
 
export default InventarioAltasView;