import React, { Component } from 'react';
import DataCard from './DataCard';
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
        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="container">
                        <h1 className="center">Weather</h1>
                        <hr />
                        <DataCard />
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="container center-align">
                        <Link className="btn red lighten-2" to="/">Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;