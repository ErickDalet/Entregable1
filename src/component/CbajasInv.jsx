import React, { Component } from 'react';

import Header from './Header';
import CbajasInvView from '../view/CbajasInvView';
import Footer from './Footer';

class CbajasInv extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CbajasInvView />
                <Footer />
            </div>
         );
    }
}
 
export default CbajasInv;