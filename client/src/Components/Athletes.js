import React from 'react';
import styled from 'styled-components'
import useColorCard from './hooks/useColorCard'

const Div = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
width: 95%;
height: 80%;
margin: 0 auto;
/* justify-content: space-around; */
`

const Div2 = styled.div`
border: 2px solid;
display: flex;
flex-direction: column;
width:25%;
margin: .5% auto;
text-align: center;
`

const Athletes = props => {

    const [colorCard, setColorCard] = useColorCard(false);
    const toggleMode = e => {
    e.preventDefault();
    setColorCard(!colorCard);
  };
  
    console.log(props)
    

    return(

        // <div>hello from athleres</div>

        // <Athlete /><div>
        <Div>
        {
            props.athletes.map( athlete =>(
            <Div2 key= {athlete.id} 
            onClick {...toggleMode} 
            className={colorCard ? 'toggle toggled' : 'toggle'}>
            <h4>{athlete.name}</h4>
            <p>Country: <strong>{athlete.country}</strong></p>
            <p>Popularity: <strong>{athlete.searches}</strong> searches</p>
            </Div2>))}
        </Div>
        
    )

    
}

// Athletes.propTypes ={
//     name: PropTypes.string,
//     country: PropTypes.string,
//     searches: PropTypes.number
// }

export default Athletes