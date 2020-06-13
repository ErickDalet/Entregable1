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

class MaestrosAltasView extends Component {
       //  state = {  }
  titulo = "Concentrado de Maestros";
  maestros = ["RIVERA MENDEZ OTHONIEL", 
    "GONZALES GALARZA RICARDO", 
    "GRANADOS AVILA RICARDO"];

  frmNoControl = React.createRef();
  frmNombre = React.createRef();

  addMaestro = event => {
    event.preventDefault();
    this.maestros.push(this.frmNombre.value);
    this.forceUpdate();
  };

    render() { 
        return ( 
            <div className="App-content">
                
                <form autoComplete="off" onSubmit={this.addMaestro}>    
                    <TextField
                        label="No. de Tarjeta"
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
                    onClick={this.addMaestro}
                    >
                    <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.maestros.map((maestro) => (
                        <ListItem button key={maestro}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={maestro} />
                        </ListItem>
                    ))}
                </List>
            </div>
         );
    }
}
 
export default MaestrosAltasView;