import React, { useState } from 'react';
import axios from 'axios';

export class New extends React.Component{
    constructor(props){
      super(props)
      this.openNews = this.openNews.bind(this)
      this.state = {
        elements: [], 
        onlyExcerpt: true, 
        isNewOpen: true}
  
    }

    async componentDidMount(){
      let n = await this.loadInfo()
      console.log(n)
      this.setState({elements: n})
      
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
      let myButton = undefined;
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
       
    }

    let newsArticle= this.state.elements.map((article)=> <div className='new'>
          <h1>{article.title}</h1>
          <h4>{article.description}</h4>
          <img src={article.urlToImage} height="150px" width="200px" ></img>
          <p>{article.content}</p>
          {myButton}
      </div>)
          
    return <>
    {newsArticle}
    </>
    }
  }
  
  