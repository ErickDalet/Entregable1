import React, { Component } from 'react';

import Header from './Header';
import MateriasEliminarView from '../view/MateriasEliminarView';
import Footer from './Footer';

class MateriasEliminar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MateriasEliminarView />
                <Footer />
            </div>
         );
    }
}
 
export default MateriasEliminar;