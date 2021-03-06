
import React, { useState } from 'react';
import {INTERNACIONAL, OPINION, ESPANA, SOCIEDAD, ECONOMIA, EDUCACION, MEDIOAMBIENTE, CIENCIA, CULTURA, BABELIA, DEPORTES, TECNOLOGIA, TELEVISION, GENTE, ELPAISSEMANAL} from '../data';
import { data, navBarElements, socialMedia } from '../data';
export class Header extends React.Component{
    constructor(props) {
      super(props)
      this.state = {...this.props.categories}
    }
    render(){
      return <div className="header">
        <div className="title-header">
          <img src={data.logo} className='logo'></img>
          <ul className='contact'>
            <li>{data.email}</li>
            <li>{data.phone}</li>
          </ul>
        </div>
        <NavBar elements={navBarElements}/>
      </div>
    }
  }

  
  export class NavBar extends React.Component{
    constructor(props) {
      super(props)
    }
    render(){
      let navBar = this.props.elements.map((element) => <div className='navbarelement'><a href ={element.href}>{element.name}</a></div>)
        return <nav className='navbar'>
             {navBar}
      </nav> 
    }
  }

  
export class Footer extends React.Component {
    constructor(props){
      super(props)
      this.state = {...this.props.socialMedia}
    }
    render(){
      return<>
      <NavBar elements={socialMedia}/>
      </>
    }
  }
  