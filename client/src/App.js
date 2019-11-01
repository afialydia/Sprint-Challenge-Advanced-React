import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Cardlist from "./components/card-list/card-list.component";

class App extends Component {
	constructor() {
		super();
		this.state = {
			athletes: []
		};
		console.log("its working - constructor");
	}

	componentDidMount() {
		const getAthletes = (url) => {
			axios
				.get(url)
				.then(res => {
					const athletes = res.data;
					console.log(athletes);

					this.setState({
						athletes: res.data
					});
				})
				.catch(err => console.log(err));
		};
		getAthletes("http://localhost:5000/api/players");
	}

	render() {
		return (
			<div className="app">
				<h1>Women's World Cup Athletes</h1>
				<Cardlist athletes={this.state.athletes} />
			</div>
		);
	}
}

export default App;
