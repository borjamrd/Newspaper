import React, { useState } from 'react';
import { data, news, navBarElements, writer1,writer2,writer3, socialMedia } from './data';

export class New extends React.Component{
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
  
  