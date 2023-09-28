import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "950px" }}>
        <Chrono
          items={data}
          mode="VERTICAL"
          cardHeight={300}
          cardWidth={650}
          mediaHeight={200}
          scrollable={{ scrollbar: false }}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem"
          }}
        />
      </div>
    </div>
  );
}
