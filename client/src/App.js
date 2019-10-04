import React from 'react';
import API from "./Components/API";
import './App.css';
import Athletes from './Components/Athletes'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: null,
      country: null,
      searches: null
    };
  }

  render() {
    const { name, country, searches } = this.state;

    return (
      <Athletes  name={name} country={country} searches= {searches}/>

      
    )
  }

  async componentDidMount(){
    let athleteData = await API.get('/',{
      params:{
        results: 1,
        inc: 'name, country, searches'
      }
    });

    athleteData = athleteData.data[0];

    const name = `Name: ${athleteData.name}`;
    const country = `Country: ${athleteData.country}`;
    const searches = ` Number of Searches: ${athleteData.searches}`;

    this.setState({
      ...this.state,...{ name, country, searches}
    })
  }
}
export default App;