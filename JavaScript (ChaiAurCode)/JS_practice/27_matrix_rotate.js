/*
Rotate Matrix

Problem Description:

Given a square 2D matrix A of size n x n representing an image, rotate the image by 90 degrees clockwise. Perform this rotation in place.

Input:

A: A 2D matrix representing the image, where each element A[i][j] represents the pixel value at row i and column j.
Output:

Rotate the given matrix A by 90 degrees clockwise.
Constraints:

1 <= n <= 1000
 */


function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
  console.log(matrix);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix(matrix);
