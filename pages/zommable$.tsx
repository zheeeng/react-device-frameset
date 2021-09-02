/**
 * @title Zoomable
 */

import React from "react";
import { Zoomable } from "../src/Zoomable";
import aaa from "../src/data.json";
console.log({
  ab: aaa,
});

const Demo = () => (
  <div style={{ display: "flex", flexShrink: 0, flexWrap: "wrap" }}>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 300,
          height: 400,
          backgroundColor: "darkgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 300, height: 400
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 305,
          height: 405,
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 305, height: 405
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 150,
          height: 200,
          backgroundColor: "lightgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 150, height: 200
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 600,
          height: 800,
          backgroundColor: "darkgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 600, height: 800
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 200,
          height: 800,
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 200, height: 800
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 300,
          height: 800,
          backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 300, height: 800
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 200, height: 200
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 400,
          height: 800,
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 400, height: 800
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 300,
          height: 200,
          backgroundColor: "yellow",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 300, height: 200
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 400,
          height: 200,
          backgroundColor: "orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 400, height: 200
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 600,
          height: 800,
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 600, height: 800
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 605,
          height: 805,
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 605, height: 805
      </div>
    </Zoomable>
    <Zoomable style={{ width: 300, height: 400 }}>
      <div
        style={{
          width: 595,
          height: 795,
          backgroundColor: "darkblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        width: 595, height: 795
      </div>
    </Zoomable>
  </div>
);

export default Demo;
