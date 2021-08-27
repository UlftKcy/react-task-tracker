import React from "react";

export default function Button({ text, color, onToggleShow }) {
  return (
    <div>
      <button onClick={onToggleShow} className="btn" style={{ color: color }}>
        {text}
      </button>
    </div>
  );
}
