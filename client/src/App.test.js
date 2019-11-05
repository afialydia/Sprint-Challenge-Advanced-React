import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});



// test that app is rendering component.
//test that app is getting api from axios