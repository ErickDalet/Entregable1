import React, { Component } from 'react';

import Header from './Header';
import PrestamosEntregarView from '../view/PrestamosEntregarView';
import Footer from './Footer';

class PrestamosEntregar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <PrestamosEntregarView />
                <Footer />
            </div>
         );
    }
}
 
export default PrestamosEntregar;