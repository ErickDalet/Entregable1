import React, { Component } from 'react';

import Header from './Header';
import InventarioEditarView from '../view/InventarioEditarView';
import Footer from './Footer';

class InventarioEditar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <InventarioEditarView />
                <Footer />
            </div>
         );
    }
}
 
export default InventarioEditar;