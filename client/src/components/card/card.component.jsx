import React from "react";
import useHover from "../../hooks/useHover";
import useToggle from '../../hooks/useToggle'
import "./card.styles.css";

export const Card = props => {
	const [hoverRef, isHovered] = useHover();
	const [athlete, getSearches] = useToggle(true);

	return (
		<div onClick={getSearches} className="card-container" ref={hoverRef}>
			{isHovered
				? document.body.classList.add("card-hover")
				: document.body.classList.remove("card-hover")}
			
			<h3 className="cards">{athlete ? `${props.athlete.name} ${props.athlete.country}` :
			`Searches: ${props.athlete.searches}` }</h3>
		</div>
	);
};
