import React from 'react';
import App from './App'
import {fireEvent, queryAllByText, getByTestId, queryAllByTestId, render} from '@testing-library/react'

test('display episode for each season',()=>{

    //arrange
    const {getAllByTestId,queryAllByTestId}=render(<App />);

    //act rerender
    const selectSeason = findByText(/select a season/i)
    fireEvent.click(selectSeason)
    const season = queryAllByText(/season 1/i);
    fireEvent.select(season)

  
    


    //assert
    // expect(season).toHaveValue(/season 1/i)

})