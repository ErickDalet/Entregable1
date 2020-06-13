import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-header">
                <Navbar/>
            </div>
         );
    }
}
 
export default Header;