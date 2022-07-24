import React from "react";

export default function Risk(props) {
  return (
    <div className="risk-container">
      <div class="risk-name">{props.name}</div>
      <div class="risk-desc">{props.desc}</div>
    </div>
  );
}
