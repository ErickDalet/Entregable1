import React, { Component } from 'react';

import Header from './Header';
import MaestrosAltasView from '../view/MaestrosAltasView';
import Footer from './Footer';

class MaestrosAltas extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MaestrosAltasView />
                <Footer />
            </div>
         );
    }
}
 
export default MaestrosAltas;