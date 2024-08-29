import { useState } from "react";
import { rotateMatrix } from "utils/rotateMatrix";

export function useMatrix() {
  const [matrix, setMatrix] = useState([
    [1, 2],
    [3, 4],
  ]);

  const increase = () => {
    const newMatrixSize = matrix.length + 1;
    const newMatrix = new Array(newMatrixSize)
      .fill(0)
      .map(() => new Array(newMatrixSize).fill(0).map(() => Math.random()));
    setMatrix(newMatrix);
  };

  const decrease = () => {
    if (matrix.length === 2) {
      alert("No puedes reducir la matriz");
      return;
    }
    const newMatrixSize = matrix.length - 1;
    const newMatrix = new Array(newMatrixSize)
      .fill(0)
      .map(() => new Array(newMatrixSize).fill(0).map(() => Math.random()));
    setMatrix(newMatrix);
  };

  const rotate = () => {
    setMatrix(rotateMatrix(matrix));
  };

  return { matrix, increase, decrease, rotate };
}
