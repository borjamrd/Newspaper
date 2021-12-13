import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Components/styles.css';
import { data, news, navBarElements, writer1,writer2,writer3, socialMedia } from './Components/data';
import {INTERNACIONAL, OPINION, ESPANA, SOCIEDAD, ECONOMIA, EDUCACION, MEDIOAMBIENTE, CIENCIA, CULTURA, BABELIA, DEPORTES, TECNOLOGIA, TELEVISION, GENTE, ELPAISSEMANAL} from './Components/data';
import { Board } from './Components/Board';
import { Header, Footer } from './Components/header/Header and Footer';
import { New } from './Components/New';





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






ReactDOM.render(<Newspaper />, document.getElementById('root'));


