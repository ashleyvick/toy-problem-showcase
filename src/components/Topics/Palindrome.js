import React from 'react';

class Palindrome extends React.Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        };
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    isPalindrome (userInput){
        const forwards = userInput;
        const backwards = userInput;
        backwards = backwards.split(''); // used to split a string into an array of substrings, and returns the new array
        backwards = backwards.reverse(); //reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
        backwards = backwards.join(''); // returns the array as a string
    
        if ( forwards === backwards ) {
        this.setState({ palindrome: 'true' });
        } else {
        this.setState({ palindrome: 'false' });
        }
    }


    render (){
        return(
            <div className="puzzleBox filterStringPB" >
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>

            </div>
        )
    }
}

export default Palindrome;