"use client";

import { CSSProperties } from "react";
import { useMatrix } from "./useMatrix";

import "./AppMatrix.css";

export default function AppMatrix() {
  const { matrix, increase, decrease, rotate } = useMatrix();

  return (
    <div
      className="app-matrix"
      style={
        {
          "--gridTemplateColumns": matrix.length,
        } as CSSProperties
      }
    >
      <div className="app-matrix__buttons">
        <button onClick={() => decrease()}>Reducir -</button>
        <button onClick={() => rotate()}>Rotar</button>
        <button onClick={() => increase()}>Crecer +</button>
      </div>
      <hr />
      <div className="app-matrix__grid">
        {matrix.flat().map((item) => (
          <div key={item}>
            <input className="app-matrix__item" type="text" placeholder="0" />
          </div>
        ))}
      </div>
    </div>
  );
}
