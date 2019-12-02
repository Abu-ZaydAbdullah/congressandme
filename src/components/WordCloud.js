import React from "react";
import { Resizable } from "re-resizable";
import ReactWordcloud from "react-wordcloud";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

function WordCloud(props) {
  return (
    <div style={{ fontSize: 90 }}>
      <Resizable
        defaultSize={{
          width: 900,
          height: 450
        }}
        style={resizeStyle}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud
            words={props.words}
            options={{
              padding: 10,
              deterministic: true,
              rotations: 3,
              rotationAngles: [0, 45],
              scale: "sqrt",
              fontSizes: [24, 64],
              fontWeight: "bold"
            }}
          />
        </div>
      </Resizable>
    </div>
  );
}

export default WordCloud;
