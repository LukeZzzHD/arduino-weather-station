import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = ({ connection }) => {
    return (
        <nav>
            <div className="nav-wrapper indigo">
                <Link to="/" className="white-text brand-logo center">AWS</Link>
				<Link to="#" className="right" style={{ marginRight: 20 + 'px' }}>
					<i className="material-icons large white-text">
                        {
                            connection ? 'wifi' : 'wifi_off'
                        }
                    </i>
				</Link>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({
	connection: state.connection.connection
});

export default connect(mapStateToProps)(Navbar);