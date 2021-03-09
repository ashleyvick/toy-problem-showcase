import React from 'react';

class Sum extends React.Component{
    constructor(){
        super ();
            this.state = {
                number1: 0,
                number2: 0,
                sum: null
        };
    }

    updateNumber1(element) {
        this.setState({number1:parseInt(element)}) //quickly convert a string to numbers.
        
    }

    updateNumber2 (element){
        this.setState({number1:parseInt(element)})
    }

    add(num1, num2){
        this.setState({sum:num1+num2})
    }

    render (){
        return(
            <div className="puzzleBox sumPB" >
                <h4>Sum</h4>
                <input className="inputLine"  onChange={(e) => this.updateNumber1(e.target.value)}/>
                <input className="inputLine"  onChange={(e) => this.updateNumber2(e.target.value)}/>
                <button className="confirmationButton">Add</button>
                <span className="resultsBox">Sum: {this.state.sum} </span>

            </div>
        )
    }
}

export default Sum;