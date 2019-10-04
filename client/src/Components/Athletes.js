import React from 'react';
import PropTypes from 'prop-types'

class Athletes extends React.Component {
    render(){
        const { name, country, searches } = this.props;

        const athleteInfo = (
            <div>
                <p>{name}</p>
                <p>{country}</p>
                <p>{searches}</p>


            </div>
        );

        return(
            <div>{athleteInfo}</div>
        )

    }
}

Athletes.propTypes ={
    name: PropTypes.string,
    country: PropTypes.string,
    searches: PropTypes.number
}

export default Athletes