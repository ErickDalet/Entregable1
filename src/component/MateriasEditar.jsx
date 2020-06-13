import React, { Component } from 'react';

import Header from './Header';
import MateriasEditarView from '../view/MateriasEditarView';
import Footer from './Footer';

class MateriasEditar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MateriasEditarView />
                <Footer />
            </div>
         );
    }
}
 
export default MateriasEditar;