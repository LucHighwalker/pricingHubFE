import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./title.scss";

function Title(props) {
  return (
    <div className="title">
      <img src="/logo_light_sm.png" alt="" className="title_image" />
      <ul className="title_buttons">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/competitors">Competitors</Link>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // action: () => dispatch(action())
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
