import React, { Component } from 'react';
import TemperatureCard from './TemperatureCard';
import HumidityCard from './HumidityCard';
import LightCard from './LightCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Weather extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/weather').then(res => this.setState({ data: res.data })).catch(err => console.error(err));
    }

    render() {
        const { temperature, humidity, light } = this.state.data || 0;

        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="container">
                        <h1 className="center">Weather</h1>
                        <hr />
                        <div className="card-container" style={{ marginTop: 20 + 'px' }}>
                            <TemperatureCard temperature={temperature} />
                            <HumidityCard humidity={humidity} />
                            <LightCard light={light} />
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="container center-align" style={{ marginTop: 10 + 'px' }}>
                        <Link className="btn indigo" to="/">Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;