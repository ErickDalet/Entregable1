import React, { Component } from 'react';

import Header from './Header';
import CgMaestroView from '../view/CgMaestroView';
import Footer from './Footer';

class CgMaestro extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CgMaestroView />
                <Footer />
            </div>
         );
    }
}
 
export default CgMaestro;