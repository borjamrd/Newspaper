import React, { useState } from 'react';
import { data, news, navBarElements, writer1,writer2,writer3, socialMedia } from './data';
import axios from 'axios';

export class New extends React.Component{
    constructor(props){
      super(props)
      this.openNews = this.openNews.bind(this)
      this.state = {
        elements: [], 
        onlyExcerpt: true, 
        isNewOpen: false}
  
    }

    async componentDidMount(){
      let k = await this.loadInfo()
      console.log(k)
      this.setState({elements: k})
      
    }
    async loadInfo (){
      const resp = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-12-16&sortBy=popularity&apiKey=de446f3010c5477e99bfbee8a890678b')
      let article = resp.data.articles
      console.log(article) 
      return article
    }

  
    openNews(){
      this.props.openNews();  /* luego esto bindea openNews como propiedad a a la linea 204 */
      
    }
    
    render() {
      let myButton, contents = undefined;
     /*  let newcontent = this.state.content;
      let arraycontent = newcontent.split(' ', 20);
      let cuttedarray = arraycontent.slice(0, 20);
      let excerpt = cuttedarray.join(' ');  
     */

      if (this.props.isNewOpen === true){

        /* content = <div>
          <summary>{excerpt}</summary>
        </div> */

        myButton= <div>
          <button onClick={this.openNews} > ATRAS</button>
          </div>     
      }else{
        myButton = <div>
          <button onClick={this.openNews} > ABRIR NOTICIA</button>
        </div>
        contents = <div>
          <p>{this.state.elements.content}</p>
      </div>
    }

    let newsArticle= this.state.elements.map((article)=> <div className='new'>
      <img src={article.url}  className="new-image"></img>
          <h1>{article.title}</h1>
          <h4>{article.description}</h4>
          <p>{article.content}</p>
          {contents}
          {myButton}
      </div>)
          
    return <>
    {newsArticle}
    </>
    }
  }
  
  