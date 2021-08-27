import React from "react";
import Button from "./Button";

export default function Header({ title, onToggleShow }) {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <Button
        text="Show Create a Task Bar"
        backgroundColor="steelblue"
        onToggleShow={onToggleShow}
      />
    </div>
  );
}
