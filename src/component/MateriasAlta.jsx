import React, { Component } from 'react';

import Header from './Header';
import MateriasAltaView from '../view/MateriasAltaView';
import Footer from './Footer';

class MateriasAltas extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MateriasAltaView />
                <Footer />
            </div>
         );
    }
}
 
export default MateriasAltas;