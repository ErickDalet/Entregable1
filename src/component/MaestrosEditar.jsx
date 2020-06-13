import React, { Component } from 'react';

import Header from './Header';
import MaestrosEditarView from '../view/MaestrosEditarView';
import Footer from './Footer';

class MaestrosEditar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <MaestrosEditarView />
                <Footer />
            </div>
         );
    }
}
 
export default MaestrosEditar;