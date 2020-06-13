import React, { Component } from 'react';

import Header from './Header';
import PrestamosPrestarView from '../view/PrestamosPrestarView';
import Footer from './Footer';

class PrestamosPrestar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <PrestamosPrestarView />
                <Footer />
            </div>
         );
    }
}
 
export default PrestamosPrestar;