import React, { Component } from 'react';
import DayCard from './DayCard';
import { connect } from 'react-redux';

class DailyForecast extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            {this.props.city && <h1>{this.props.city.name}</h1>}
            <div style={container}>
                
                {this.props.forecast && this.props.forecast.map((forecast, index)=>{
                    return (<DayCard 
                        forecast = {forecast} city={this.props.city} key={index}/>)
                })}
            </div>
            </div>
        )
    }
}

const container = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center'
}

const mapStateToProps = (state) => {
    return {
        city: state.data.city,
        forecast: state.data.list
    }
}

export default connect(
    mapStateToProps,
    null
)(DailyForecast)