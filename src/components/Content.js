import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Contact, Home} from './../screens'


export default class Content extends React.PureComponent {
constructor(props){
  super(props);
  this.state = {
  }
}

componentDidMount(){

}


render(){
  return (
     <Router>
           <Route  exact path="/"  component={Home}/>
           <Route path="/contact"  component={Contact} />

     </Router>
  );
  };
}
