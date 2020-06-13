import React, { Component } from 'react';

import Header from './Header';
import CporPrestamoView from '../view/CporPrestamoView';
import Footer from './Footer';

class CporPrestamo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CporPrestamoView />
                <Footer />
            </div>
         );
    }
}
 
export default CporPrestamo;