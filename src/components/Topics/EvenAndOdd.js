import React from 'react';

class EvenAndOdd extends React.Component {
    constructor (){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    assignEvenandOdds = () => {
        const arr = this.state.userInput.split(','); // The split() method is used to split a string into an array of substrings, and returns the new array.
        const evens = [...this.state.evenArray]
        const odds = [...this.state.oddArray]
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push((arr[i])); //pushing the evens into the EMPTY evens array
        } else {
            odds.push((arr[i])) // pushing the odds into the EMPTY odds array
        }
    }
        this.setState({evenArray: evens, oddArray: odds})
        }
    
        


    render (){
        return (
        <div className="puzzleBox evenAndOddPB">
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={()=> { this.assignEvenandOdds(this.state.userInput) }}>Sort</button>
        <h4>Evens and Odds</h4>
        <span className="resultBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
        </div>
        )
    }
}

export default EvenAndOdd;