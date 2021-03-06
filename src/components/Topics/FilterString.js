import React from 'react';

class FilterString extends React.Component {
    constructor (){
        super();
        this.state = {
            names: ['Ashley', 'Jefferson', 'Theodore', 'Benjamin'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    filterFamily(userInput) {
        const names = this.state.names;
        const filteredFamily = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(userInput) ){
                filteredFamily.push(names[i])
            }
        }
        this.setState({filteredFamily:filteredFamily});
    }

    render (){
        return (
            <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className = "puzzleText">Original: {JSON.stringify(this.state.names)}</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={ () => this.filterFamily(this.state.userInput)} ></button>
            <span className="resultsBox filterStringRB" >Filtered: {JSON.stringify(this.state.filteredFamily)}</span>

            </div>
        )
    }
}

export default FilterString;