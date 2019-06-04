import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Statistics extends Component {

    componentDidMount() {

    }

    render() {
        const { dataHistory } = this.props;

        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="container center-align">
                        <h1 className="center">Statistics</h1>
                    </div>
                </div>
                <div className="col s12 m4 l4" style={{ padding: 'auto' }}>
                    <LineChart width={600} height={400} data={dataHistory}>
                        <XAxis />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#ff0000" activeDot={{ r: 1 }} />
                    </LineChart>
                </div>
                <div className="col s12 m4 l4" style={{ padding: 'auto' }}>
                    <LineChart width={600} height={400} data={dataHistory}>
                        <XAxis />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="humidity" stroke="#0000ff" activeDot={{ r: 1 }} />
                    </LineChart>
                </div>
                <div className="col s12 m4 l4" style={{ padding: 'auto' }}>
                    <LineChart width={600} height={400} data={dataHistory}>
                        <XAxis />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="light" stroke="#ffe418" activeDot={{ r: 1 }} />
                    </LineChart>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state,
    dataHistory: state.history.dataHistory
});

export default connect(mapStateToProps)(Statistics);