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
        this.setState({userInput: value,
        palindrome: ''
    });
    }

    isPalindrome (userInput){
        const forwards = this.state.userInput;
        const backwards = forwards.split('').reverse().join('');
        if (forward === backwards) {
            this.setState({
                userInput: '',
                palindrome: 'true',
            })
        } else {
            this.setState({
                userInput: '',
                palindrome: 'false'
            })
        }
    };


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