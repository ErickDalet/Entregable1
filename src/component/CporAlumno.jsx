import React, { Component } from 'react';

import Header from './Header';
import CporAlumnoView from '../view/CporAlumnoView';
import Footer from './Footer';

class CporAlumno extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CporAlumnoView />
                <Footer />
            </div>
         );
    }
}
 
export default CporAlumno;