import React, { Component } from 'react';
import DataCard from './DataCard';
import axios from 'axios';

class Weather extends Component {
    state = {
        data: null,
        lastRefresh: false
    }

    componentDidMount() {
        this.handleReload();
    }

    handleReload = e => {
        axios.get('http://localhost:8000/api/weather').then(res => this.setState({ data: res.data })).catch(err => console.error(err));
        this.setState({
            lastRefresh: new Date()
        });
    }

    handleClick = e => {
        let d = new Date();
        let timePassed = (d.getTime() - this.state.lastRefresh.getTime()) / 1000;
        if (timePassed < 60) {
            M.toast({ html: `Last refresh done ${timePassed} seconds ago, wait atleast one minute!` });
        } else {
            this.handleReload();
        }
    }

    render() {
        const { temperature, humidity, light } = this.state.data || 0;

        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="container">
                        <h1 className="center">Weather</h1>
                        <hr />
                        <div className="card-container">
                            <DataCard label="Temperature" value={temperature} />
                            <DataCard label="Humidity" value={humidity} />
                            <DataCard label="Light" value={light} />
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="container center-align" style={{ marginTop: 10 + 'px' }}>
                        <button className="btn-large red ligthen-1 white-text tooltipped" data-position="bottom" data-tooltip="Reload" onClick={this.handleClick}>
                            <i className="material-icons">autorenew</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;