import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.css';

// Importar Componentes
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class Inicio extends Component {
    //state = {  }
    render() { 
        return ( 
            <div>
                <Header name="MENU PRINCIPAL" />
                <Content />
                <Footer />
            </div>
         );
    }
}
 
export default Inicio;