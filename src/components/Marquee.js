import React from "react";
import {connect} from "react-redux";

function Marquee(props) {
  const message = props.match.params.text;
  return (
    <marquee>{message}</marquee>
  );
}

export default Marquee;

//
// const mapStateToProps = function (state) {
//   return {
//     text: state.text
//   };
// };
// export default connect(mapStateToProps,null);
