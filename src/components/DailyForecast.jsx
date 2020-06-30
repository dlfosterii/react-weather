import React, { Component } from 'react';
import DayCard from './DayCard';
import { connect } from 'react-redux';

class DailyForecast extends Component {
    render() {
        if (Object.keys(this.props.forecast).length > 0) {console.log(this.props.forecast)}
        return (
            <div>
                <DayCard 
                data = {this.props.forecast}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        forecast: state.data
    }
}

export default connect(
    mapStateToProps,
    null
)(DailyForecast)