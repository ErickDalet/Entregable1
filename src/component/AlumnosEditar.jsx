import React, { Component } from 'react';

import Header from './Header';
import AlumnosEditarView from '../view/AlumnosEditarView';
import Footer from './Footer';

class AlumnosEditar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <AlumnosEditarView />
                <Footer />
            </div>
         );
    }
}
 
export default AlumnosEditar;