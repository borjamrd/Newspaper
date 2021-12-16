import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Components/styles.css';
import { data, news } from './Components/data';
import { Board } from './Components/Board';
import { Header, Footer } from './Components/header/Header and Footer';
import { New } from './Components/New';
import axios from 'axios';





class Newspaper extends React.Component{
  constructor(props) {
    super(props)
    this.state = {isNewOpen: false}
    this.openNews = this.openNews.bind(this)
    
  }

  async componentDidMount(){
    const resp = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-12-16&sortBy=popularity&apiKey=de446f3010c5477e99bfbee8a890678b')
    // console.log(resp.data)
    /* let data= JSON.stringify({
      
    }) */

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
       <New openNews={this.openNews} isNewOpen={true}/>
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


