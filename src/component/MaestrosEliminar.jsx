import React, { Component } from 'react';

import Header from './Header';
import MaestrosEliminarView from '../view/MaestrosEliminarView';
import Footer from './Footer';

class MaestrosEliminar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MaestrosEliminarView />
                <Footer />
            </div>
         );
    }
}
 
export default MaestrosEliminar;