import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Components/styles.css';
import { data, news, navBarElements, writer1,writer2,writer3, socialMedia } from './Components/data';
import {INTERNACIONAL, OPINION, ESPANA, SOCIEDAD, ECONOMIA, EDUCACION, MEDIOAMBIENTE, CIENCIA, CULTURA, BABELIA, DEPORTES, TECNOLOGIA, TELEVISION, GENTE, ELPAISSEMANAL} from './Components/data';



class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {...this.props.categories}
  }
  render(){
    return <div className="header">
      <div className="title-header">
        <img src={data.logo} className='logo'></img>
        <ul>
          <li>{data.email}</li>
          <li>{data.phone}</li>
        </ul>
      </div>
      <NavBar className='navbar' elements={navBarElements}/>
    </div>
  }
}

class NavBar extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    let navBar = this.props.elements.map((element) => <div className='navbarelement'><a href ={element.href}>{element.name}</a></div>)
      return <nav>
           {navBar}
    </nav> 
  }
}


class Newspaper extends React.Component{
  constructor(props) {
    super(props)
    this.state = {isNewOpen: false}
    this.openNews = this.openNews.bind(this)
    
  }

  openNews(){
    this.setState(state => ({isNewOpen : !state.isNewOpen})) 
  }
  

  render(){
    let myRender = undefined
    if (this.state.isNewOpen === true) {
      myRender = <div>
       <Header />
       <h1>{data.name}</h1>
       <New openNews={this.openNews} />
       <Footer/>
      </div>
    } else {
      myRender=  <div><Header />
      <h1>{data.name}</h1>
      <Board  news={news} openNews={this.openNews}/>
      <Footer/>
      </div>
    }
    return <div>
      {myRender}
    </div>
  }
}

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state={...news, isNewOpen: true}
    this.openNews =this.openNews.bind(this);
    
  }

  openNews(){
    this.props.openNews()
  }
    render(){
      let newsItem = this.props.news.map((element) =><New elements={element} openNews={this.openNews} />);  /* pasar via propiedades por la linea 199 */
      return <div>
        {newsItem}
    </div>
    }
  }


class New extends React.Component{
  constructor(props){
    super(props)
    this.openNews = this.openNews.bind(this)
    this.state = {...this.props.elements, onlyExcerpt: true, isNewOpen: false}

  }

  openNews(){
    this.props.openNews();  /* luego esto bindea openNews como propiedad a a la linea 204 */
    
  }
  
  render() {
    let myButton, content = undefined;
  /*   let newcontent = this.state.content;
    let arraycontent = newcontent.split(' ');
    let cuttedarray = arraycontent.slice(0, 20);
    let excerpt = String(cuttedarray); */

  
    if (this.state.isNewOpen === false){
      myButton = <div>
        <button onClick={this.openNews} > ATRÁS</button>
      </div>
    }else{
      myButton= <div>
        <button onClick={this.openNews} > ABRIR NOTICIA</button>
        </div>
  }
        
  return <div className='new'>
      <img src={this.state.newsImage}  className="new-image"></img>
          <h1>{this.state.title}</h1>
          <h4>{this.state.subtitle}</h4>
          <p>{this.state.content}</p>
          {myButton}
      </div>
  }
}



class Footer extends React.Component {
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


ReactDOM.render(<Newspaper />, document.getElementById('root'));


