import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";


class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="sm">
                <Link to="/alumnos">
                    <Button variant="contained" color="default">
                        Alumnos
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/materias">
                    <Button variant="contained" color="default">
                        Materias
                    </Button>
                </Link>
                &nbsp;&nbsp;
                <Link to="/grados">
                    <Button variant="contained" color="default">
                        Grados
                    </Button>
                </Link>
            </Container>
            </div>
         );
    }
}
 
export default Content;