import React, { Component } from 'react';
import DataCard from './DataCard';
import axios from 'axios';
import M from 'materialize-css';

class Weather extends Component {
    state = {
        data: {
            temperature: '...',
            humidity: '...',
            light: '...',
            date: false
        },
        connection: true
    }

    componentDidMount() {
        this.handleReload();
        setInterval(() => {
            axios.get('http://localhost:8000/api/weather').then(res => this.setState({ data: res.data, connection: true })).catch(err => {
                this.setState({ connection: false });
            });
        }, 5000);
    }

    handleReload = () => {
        axios.get('http://localhost:8000/api/weather').then(res => {
            this.setState({ data: res.data, connection: true });
        }).catch(err => {
            M.toast({
                html: 'Something went wrong, we cannot connect to the API',
                classes: 'red'
            });
            this.setState({ connection: false });
        });
    }

    render() {
        const { temperature, humidity, light } = this.state.data || 0;
        const date = new Date(this.state.data.date).toLocaleString('en-US',{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});

        return (
            <div className="row">
                <button className={`connection disabled btn-large btn-floating float-right`}>
                    <i className="material-icons white-text">
                        {
                            this.state.connection ? 'wifi' : 'wifi_off'
                        }
                    </i>
                </button>
                <div className="col s12 m12 l12">
                    <div className="container center-align">
                        <h1 className="center">Weather</h1>
                        <span>Last measurement: { date }</span>
                        <div className="row">
                            <DataCard label="Temperature" value={temperature} unit="°C" />
                            <DataCard label="Humidity" value={humidity} unit="%" />
                            <DataCard label="Light" value={light} unit="lx" />
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="container center-align" style={{ marginTop: 10 + 'px' }}>
                        <button className="btn-large btn-floating red ligthen-1 white-text tooltipped" data-position="bottom" data-tooltip="Reload" onClick={this.handleReload}>
                            <i className="material-icons">autorenew</i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;