import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeLocation } from '../redux/actions/searchActions';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&units=imperial&appid=3c8517b441cdf4efaee2ada20cf6cde2`)
        .then(res => res.json())
        .then(data => this.props.changeLocation(data))
        this.setState(
            { inputValue: '' }
        )

    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter City: </label>
                    <input type="text" placeholder="Enter City" onChange={this.handleChange} value={this.state.inputValue}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = {
    changeLocation
}

export default connect(
    null,
    mapDispatchToProps
)(Search)