
import React, { useState } from 'react';
import { New } from './New';
import { data, news, navBarElements, writer1,writer2,writer3, socialMedia } from './data';


export class Board extends React.Component{
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
  
  