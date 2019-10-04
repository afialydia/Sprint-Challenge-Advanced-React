import React from 'react'
import styled from "styled-components";
import Athlete from './Athlete'

const TodoDiv = styled.div`
border: 3px solid;`


const AthleteCard = props => {

    this.props.getAthletes()

    return(
        <div className="movie-list">
       {this.props.athleteData.map(athlete => (
        <Athlete key={this.props.id} name={this.props.name} />
      ))} 
    </div>
    );
};

export default AthleteCard;
