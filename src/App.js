import React, { Component } from 'react';
import Search from "./components/search/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
     < div>
     <div className='header'>
        Search what you need !!!
     </div>
      <MuiThemeProvider >
    
      <Search />
      
      </MuiThemeProvider>
 
      </div>
    )
  }
}

export default App;
