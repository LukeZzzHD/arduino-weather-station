import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ connection }) => {
    return (
        <nav>
            <div className="nav-wrapper indigo">
                <ul>
                    <li>
                        <Link to="/" className="white-text brand-logo center">AWS</Link>
                    </li>
                    <li>
                        <Link to="/weather" style={{ marginLeft: 20 + 'px' }}>Weather</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                    <li className="right">
                        <Link to="#" style={{ marginRight: 20 + 'px' }}>
                            <i className="material-icons large white-text">
                                {connection ? 'wifi' : 'wifi_off'}
                            </i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
    connection: state.connection.connection
});

export default connect(mapStateToProps)(Navbar);