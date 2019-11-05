import React from "react";
import { render, cleanup } from "@testing-library/react";
import Cardlist from "./card-list.component";

//test that props are being passed down
//test that info is being mapped over
afterEach(cleanup);

test('renders "Server disconnected... please try again', () => {
	const { getByText } = render(<Cardlist />);
	expect(
		getByText(/Server Disconnected... Please try again/i)
	).toBeInTheDocument();
});


test("renders athletes", () => {
	const fakeAthletes = [
		{ name: "Carli Lloyd", country: "United States", searches: 9 },
		{ name: "Julie Ertz", country: "United States", searches: 8 }
	];
	render(<Cardlist athletes={fakeAthletes} />);
});
