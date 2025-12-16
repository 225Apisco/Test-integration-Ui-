import React from "react";

export default function ActionButton({ label, onClick }) {
  return (
    <button className="btn btn-sm btn-outline-primary me-2" onClick={onClick}>
      {label}
    </button>
  );
}
