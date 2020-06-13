import React, { Component } from 'react';

import Header from './Header';
import AlumnosAltasView from '../view/AlumnosAltasView';
import Footer from './Footer';

class AlumnosAltas extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <AlumnosAltasView />
                <Footer />
            </div>
         );
    }
}
 
export default AlumnosAltas;