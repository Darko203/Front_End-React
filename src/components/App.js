import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Calendar} from './Calendar';
import {About} from './About';
import {Navigation} from './Navigation';
import { Contact } from './Contact';
export class App extends React.Component {

  
  render(){
    
    return(
      <div id="app">
        <Navigation/>
        
         <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Calendar} />
          <Route path="/contact" component={Contact} />
        </Switch> 
        
        
        
      </div>
    )
  }
}