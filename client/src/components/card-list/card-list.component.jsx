import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";


const CardList = props => {
	if (!props.athletes || !props.athletes.length){
		return <div>Server Disconnected... Please try again</div>
	}
	return (
	<div className="card-list">
		{props.athletes.map(athlete => (
			<Card key={athlete.id} athlete={athlete} />
		))}
	</div>
)};

export default CardList
