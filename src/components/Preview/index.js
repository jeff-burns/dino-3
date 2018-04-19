import React from "react";

const Preview = props => {
  return (
    <div>
      <section id="application-preview">{props.keyStrokes}</section>
    </div>
  );
};

export default Preview;
