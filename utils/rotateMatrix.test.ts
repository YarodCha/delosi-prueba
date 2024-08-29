import { rotateMatrix } from "./rotateMatrix";

const matrixToString = (matrix: Array<Array<number>>) => {
  return matrix.flat().join(",");
};

test("Case 1: Test rotateMatrix function", () => {
  const matrix_n2 = [
    [1, 2],
    [3, 4],
  ];

  const matrix_n2_rotated = [
    [2, 4],
    [1, 3],
  ];

  expect(matrixToString(rotateMatrix(matrix_n2))).toBe(
    matrixToString(matrix_n2_rotated)
  );
});

test("Case 2: Test rotateMatrix function", () => {
  const matrix_n3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const matrix_n3_rotated = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7],
  ];

  expect(matrixToString(rotateMatrix(matrix_n3))).toBe(
    matrixToString(matrix_n3_rotated)
  );
});
