import React from 'react';
import Athletes from './Components/Athletes'
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      athletes: []
    }
    console.log('constructor up')
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        const athletes = res.data;
        console.log(athletes)
        
        this.setState({
          athletes: res.data
        })
      })

      .catch(err => console.log(err));

    }



  render(){
    this.state.athletes &&
    console.log(this.state.athletes)
    return (
      
       <Athletes athletes = {this.state.athletes} />

    );
  }
}

export default App;


