import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

class Alumnos extends Component {
  //  state = {  }
  titulo = "LISTA DE ALUMNOS";
  alumnos = ["SANCHEZ MAGDALENO VANESA", 
    "GUTIERREZ PARDO JUAN", 
    "GARCIA MORENO RAUL", 
    "HERNANDEZ CHAVEZ MARIANA",
    "MORENO SANDOVAL LETICIA",
    "NUÑES NUÑEZ JOSELINE",
    "SIGNORET RAMIREZ MARTHA",
    "SANDOVAL MORFIN SANDRA GUADALUPE",
    "VENTURA ROMERO CHRISTIAN",
    "VILLANUEVA SANCHEZ RENATA"];

  frmNoControl = React.createRef();
  frmNombre = React.createRef();

  addAlumno = event => {
    //console.log("Agregar alumno");
    event.preventDefault();
    //console.log("Console mensaje");    
    //console.log(this.frmNoControl.value);
    //console.log(this.frmNombre.value);
    this.alumnos.push(this.frmNombre.value);
  };

    render() { 
        return ( 
            <div className="App-alumnos">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
                <form autoComplete="off" onSubmit={this.addAlumno}>    
                    <TextField
                        label="No. de Control"
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
                    onClick={this.addAlumno}
                    >
                    <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.alumnos.map((alumno) => (
                        <ListItem button key={alumno}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={alumno} />
                        </ListItem>
                    ))}
                </List>
            </div>
         );
    }
}
 
export default Alumnos;