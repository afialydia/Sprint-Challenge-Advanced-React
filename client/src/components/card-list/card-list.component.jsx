import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

const CardList = props => (
	<div className="card-list">
		{props.athletes.map(athlete => (
			<Card key={athlete.id} athlete={athlete} />
		))}
	</div>
);

export default CardList;
