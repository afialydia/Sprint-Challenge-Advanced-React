import React from "react";
import styled from "styled-components";

const Athlete = props => {
    return(
        <TodoDiv>
            <p>{props.athleteData.name}</p>
        </TodoDiv>
    )
}

export default Athlete;


componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then( res => {
        console.log(res.data)
        this.setState({
          athleteData: res.data
        })
      })
      .catch(err => console.log('error in axios', err));

    }

  // componentDidUpdate(prevProps, prevState){

  // }
  handleChanges = e => {
    this.setState({
      athleteText: e.target.value
    });
    console.log(e.target.value)

  };

  fetchAthletes = e => {
    
    e.preventDefault();

    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({
        athleteData: res.data
      });
    })
    .catch(err => console.log('fetch error', err));


  }
  render(){      

    return (

      <div className="App">
       <input 
       type="text"
       value={this.state.athleteText}
       onChange={this.handleChanges}
       />

       {/* <button onClick={this.fetchAthletes}>Search Players</button>
       <div>
         {this.state.athleteData.map(athlete => (
           <p>{this.state.athleteData.name}</p>
         ))}
       </div> */}
      </div>
    );
  }
}

export default App;


