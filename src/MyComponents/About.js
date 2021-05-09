import React from "react";

export const About = () => {
  let myStyle = {
    minHeight: "70vh",
    margin: "75px auto",
  };
  return (
    <div className="text-center" style={myStyle}>
      <h1>This is an component just for using Router</h1>

      <h2>
        This is an To-do app , where you can make your to-list and make your
        future plans without forgetting
      </h2>
    </div>
  );
};
