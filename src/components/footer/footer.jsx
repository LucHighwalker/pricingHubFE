import React from 'react';
import { connect } from "react-redux";
import './footer.scss';

function Footer(props) {
	return (
		<div className="footer">
			<ul className="footer_ul">
				<li className="footer_li header">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
			</ul>
			<ul className="footer_ul">
				<li className="footer_li header">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
			</ul>
			<ul className="footer_ul">
				<li className="footer_li header">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
			</ul>
			<ul className="footer_ul">
				<li className="footer_li header">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
				<li className="footer_li">Something</li>
			</ul>
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
