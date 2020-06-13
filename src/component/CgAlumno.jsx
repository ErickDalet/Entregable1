import React, { Component } from 'react';

import Header from './Header';
import CgAlumnoView from '../view/CgAlumnoView';
import Footer from './Footer';

class CgAlumno extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CgAlumnoView />
                <Footer />
            </div>
         );
    }
}
 
export default CgAlumno;