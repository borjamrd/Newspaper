
import React, { useState } from 'react';
import { New } from './New';


export class Board extends React.Component{
    constructor(props){
      super(props)
      this.state={ isNewOpen: true}
      this.openNews =this.openNews.bind(this);
      
    }
  
    openNews(){
      this.props.openNews()
    }
      render(){/* pasar via propiedades por la linea 199 */
        return <div>
        <New  openNews={this.openNews} />
      </div>
      }
    }
  
  