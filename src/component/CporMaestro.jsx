import React, { Component } from 'react';

import Header from './Header';
import CporMaestroView from '../view/CporMaestroView';
import Footer from './Footer';

class CporMaestro extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CporMaestroView />
                <Footer />
            </div>
         );
    }
}
 
export default CporMaestro;