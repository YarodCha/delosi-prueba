export function rotateMatrix(mat: Array<Array<number>>): Array<Array<number>> {
  const size = mat.length;
  const newMatrix = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newMatrix[i][j] = mat[j][size - i - 1];
    }
  }

  return newMatrix;
}
