import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CounterPage extends Component {

    render() {
        console.log("-----props-----", this.props);
        const {counter} = this.props; //деструктуризація
        return (
            <div>
                <h1>Counter</h1>
                <p>Value redux: {counter}</p>
            </div>
        )
    }
}
const mapState = (stateRedux) =>
{
    return {
        counter: stateRedux.counter.data
    };
}

export default connect(mapState)(CounterPage);
