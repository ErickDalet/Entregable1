import React, { Component } from 'react';

import Header from './Header';
import PrestamosEditarView from '../view/PrestamosEditarView';
import Footer from './Footer';

class PrestamosEditar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <PrestamosEditarView />
                <Footer />
            </div>
         );
    }
}
 
export default PrestamosEditar;