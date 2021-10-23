import React from "react";

function Button({ label }) {
  // use data-testid instead of regular ids to differentiate testing from css
  // - "data" is an html attribute
  return (
    <div data-testid="button" className="button-style">
      {label}
    </div>
  );
}

export default Button;
