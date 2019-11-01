import React from 'react'
import {render, cleanup} from '@testing-library/react'
import 'jest-dom/extend-expect'

//test that props are being passed down
//test that info is being mapped over
afterEach(cleanup)

test('renders "Server disconnected... please try again', ()=>{
    const {getByText} = render(<Cardlist />)
    expect(getByText(/Server Disconnected... Please try again/i)).toBeInTheDocument()
})