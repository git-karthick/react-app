import React from "react";
import PropTypes from "prop-types";
interface Props {
  text: string;
  onClose: () => void;
}

const Alert = ({ text, onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      <strong>{text}!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
