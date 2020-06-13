import React, { Component } from 'react';

import Header from './Header';
import InventarioEliminarView from '../view/InventarioEliminarView';
import Footer from './Footer';

class InventarioEliminar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <InventarioEliminarView />
                <Footer />
            </div>
         );
    }
}
 
export default InventarioEliminar;