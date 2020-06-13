import React, { Component } from 'react';

import Header from './Header';
import InventarioAltasView from '../view/InventarioAltasView';
import Footer from './Footer';

class InventarioAltas extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <InventarioAltasView />
                <Footer />
            </div>
         );
    }
}
 
export default InventarioAltas;