import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super (props)

        this.state = {
            loc: [],
            inputValue: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&units=imperial&appid=3c8517b441cdf4efaee2ada20cf6cde2`)
        .then(res => res.json())
        .then(data => {this.setState({
            loc: [...this.setState.loc, data],
            inputValue: '',
        })})
    )
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter City: </label>
                    <input type="text" placeholder="Enter City"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
