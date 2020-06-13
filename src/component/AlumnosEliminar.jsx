import React, { Component } from 'react';

import Header from './Header';
import AlumnosEliminarView from '../view/AlumnosEliminarView';
import Footer from './Footer';

class AlumnosEliminar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <AlumnosEliminarView />
                <Footer />
            </div>
         );
    }
}
 
export default AlumnosEliminar;