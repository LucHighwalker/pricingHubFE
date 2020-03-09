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
			<ul className="footer_ul_img">
				<li className="footer_li_img"><img src="facebook.png" alt="facebook"/></li>
				<li className="footer_li_img"><img src="twitter.png" alt="twitter"/></li>
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
