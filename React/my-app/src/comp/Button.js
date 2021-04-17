import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn text-light" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  color: "blue",
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
