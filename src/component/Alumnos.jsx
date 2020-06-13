import React, { Component } from 'react';

import Header from './Header';
import AlumnosView from '../view/Alumnos';
import Footer from './Footer';

class Alumnos extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="ALUMNOS" />
                <AlumnosView />
                <Footer />
            </div>
         );
    }
}
 
export default Alumnos;