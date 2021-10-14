import React  from 'react';
import {NavbarBrand,Navbar,NavItem,NavLink,NavbarText,UncontrolledDropdown,DropdownItem,DropdownToggle,Collapse,NavbarToggler,DropdownMenu,Nav} from 'reactstrap'
import {logo} from './../assets/imgs'
import {withRouter} from 'react-router-dom'

class Header extends React.PureComponent {
constructor(props){
  super(props);
  this.state = {
      isOpen:false
  }
}

componentDidMount(){

}


toggle(){
    this.setState({isOpen:!this.state.isOpen})
}


render(){
  return (
    <div>
    <Navbar color="light" light expand="md" className="styleHeader" style={{paddingLeft:'5%',paddingRight:'5%'}}>
      <NavbarBrand href="/"><img src={logo} style={{width:150}}/></NavbarBrand>
      <NavbarToggler onClick={()=>this.toggle()} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/components/" style={{color:'#404040'}}>Download</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'#404040'}}>Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'#404040'}}>About Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
  };
}

export default Header
