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
        content = <div>
          <p>{this.state.content}</p>
      </div>
    }
          
    return <div className='new'>
        <img src={this.state.newsImage}  className="new-image"></img>
            <h1>{this.state.title}</h1>
            <h4>{this.state.subtitle}</h4>
            <p>{this.state.content}</p>
            {content}
            {myButton}
        </div>
    }
  }
  
  