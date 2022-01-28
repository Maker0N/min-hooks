import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onClick, name }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

SimpleComponent.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string
};

export default SimpleComponent;
