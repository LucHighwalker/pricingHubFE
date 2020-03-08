import React from 'react';
import { connect } from "react-redux";
import './footer.scss';

function Footer(props) {
	return (
		<div className="footer">
			<p>footer works!</p>
		</div>
	);
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	// your dispatches go here.
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
