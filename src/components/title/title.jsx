import React from "react";
import { connect } from "react-redux";
import "./title.scss";

function Title(props) {
  return (
    <div className="title">
      <img src="/logo_light_sm.png" alt="" className="title_image" />
      <ul className="title_buttons">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/prices">Prices</a>
        </li>
        <li>
          <a href="/competitors">Competitors</a>
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
