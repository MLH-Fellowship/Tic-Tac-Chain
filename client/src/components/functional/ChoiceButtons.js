import React from "react";

const ChoiceButton = ({ type, choice, label, onChoice }) => {
  return (
    <div className={`btn btn-${type}`} onClick={onChoice.bind(this, choice)}>
      <span>
          {label}
      </span>
    </div>
  );
};

export default ChoiceButton;
