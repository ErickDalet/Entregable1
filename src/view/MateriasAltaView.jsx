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
class MateriasAltasView extends Component {
       //  state = {  }
  titulo = "Conentrado de Materias";
  materias = ["SISTEMAS DIGITALES", 
    "LENGUAJES DE INTERFAZ", 
    "ARQUITECTURA DE COMPUTADORAS 1", 
    "ARQUITECTURA DE COMPUTADORAS 1"];

  frmNoControl = React.createRef();
  frmNombre = React.createRef();

  addmateria = event => {
    event.preventDefault();
    this.materias.push(this.frmNombre.value);
    this.forceUpdate();
  };

    render() { 
        return ( 
            <div className="App-content">
                
                <form autoComplete="off" onSubmit={this.addAlumno}>    
                    <TextField
                        label="Clave"
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
                    onClick={this.addmateria}
                    >
                    <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.materias.map((materia) => (
                        <ListItem button key={materia}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={materia} />
                        </ListItem>
                    ))}
                </List>
            </div>
         );
    }
}
 
export default MateriasAltasView;