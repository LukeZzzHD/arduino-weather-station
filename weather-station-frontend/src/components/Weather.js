import React, { Component } from 'react';
import DataCard from './DataCard';
import axios from 'axios';
import M from 'materialize-css';
import { connect } from 'react-redux';

class Weather extends Component {

    componentDidMount() {
		const { updateData, updateHistory, connect, disconnect } = this.props;
        this.handleReload();
        setInterval(() => {
            axios.get('http://localhost:8000/api/weather').then(res => {
				updateData(res.data);
				updateHistory(res.data);
			}).catch(err => {
                console.error(err);
            });
        }, 5000);
		setInterval(() => {
			axios.get('http://localhost:8000/api/connection').then(res => {
				connect();
			}).catch(err => {
				disconnect();
			});
		}, 500);
    }

    handleReload = () => {
		const { updateData, updateHistory } = this.props;
        axios.get('http://localhost:8000/api/weather').then(res => {
            updateData(res.data);
            updateHistory(res.data);
        }).catch(err => {
            M.toast({
                html: 'Something went wrong, we cannot connect to the API',
                classes: 'red'
            });
        });
    }

    render() {
        const { temperature, humidity, light, date } = this.props.data;
        const reloadDate = new Date(date).toLocaleString('en-US',{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'});
		
        return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="container center-align">
                        <h1 className="center">Weather</h1>
                        <span>Last measurement: { reloadDate }</span>
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

const mapStateToProps = state => ({
	data: {...state.data},
	dataHistory: {...state.history}
});

const mapDispatchToProps = dispatch => ({
	updateData: data => dispatch({ type: 'UPDATE_DATA', payload: data }),
	connect: () => dispatch({ type: 'CONNECT' }),
	disconnect: () => dispatch({ type: 'DISCONNECT' }),
	updateHistory: data => dispatch({ type: 'UPDATE_HISTORY', payload: data })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Weather);