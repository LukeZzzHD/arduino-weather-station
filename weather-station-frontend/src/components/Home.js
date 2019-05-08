import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="row">
            <div className="col s12 m12 l12 xl12">
                <div className="container center-align">
                    <h1 className="center">Arduino Weather Station</h1>
                    <hr />
                    <Link className="btn red lighten-2 white-text center" to="/weather">Weather<i className="material-icons right">send</i></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;