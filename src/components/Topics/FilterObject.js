import React from 'react';

class FilterOjects extends React.Component {
    constructor(){
        super();
        this.state = {
            family:[
                {
                    name: 'Jefferson',
                    title: 'Father',
                    age: 28,
                },
                {
                    name: 'Ashley',
                    title: 'Mother',
                    age: 30,
                },
                {
                    name: 'Theodore',
                    title: 'Big Brother',
                    age: 3
                },
                {
                    name: 'Benjamin',
                    title: 'Baby',
                    age: 1              
                }
            ],
            userInput: "",
            filterArray: []

        }
    }

    handleChange(value) {
        this.setState({userInput: value});
    }

    filterFamily (prop) {
        const family = this.state.family
        const filteredFamily = [];

        for (let i = 0; i < family.length; i++) {
            if (family[i].hasOwnProperty(prop) ) { //// This method can be used to determine whether an object has the specified property as a direct property of that object; If an Object is an Array, hasOwnProperty method can check whether an index exists.
            filteredFamily.push(family[i]);
        }
    }
        this.setState({filteredFamily:filteredFamily});
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.family)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => {this.filterFamily(this.state.userInput)}} >Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredFamily)}</span>

            </div>
        )
    }
}

export default FilterOjects;