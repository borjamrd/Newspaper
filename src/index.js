import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';


class Newspaper extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return <div>
      <h1>Hola Marcus</h1>
    </div>
  }
}

ReactDOM.render(<Newspaper />, document.getElementById('root'));


