/*
https://leetcode.com/problems/valid-sudoku/description/
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

Constraints:
    board.length == 9
    board[i].length == 9
    board[i][j] is a digit 1-9 or '.'.
*/
const SUDOKU_SIZE = 9;
function isValidSudoku(board: string[][]): boolean {
	const columnas: string[][] = [];
	const grid: string[][] = [];

	for (let i = 0; i < SUDOKU_SIZE; i++) {
		// Comprobar filas
		if (hasDuplicatedNumbers(board[i])) return false;

		// Rellenar array columnas y grid
		for (let j = 0; j < SUDOKU_SIZE; j++) {
			columnas[j] = columnas[j] || [];
			columnas[j].push(board[i][j]);

			const columna = Math.floor(j / 3);
			const fila = Math.floor(i / 3);
			const gridIndex = fila + columna;
			grid[gridIndex] = grid[gridIndex] || [];
			grid[gridIndex].push(board[i][j]);

			if (grid[gridIndex].length === SUDOKU_SIZE) {
				if (hasDuplicatedNumbers(grid[gridIndex])) return false;
				else grid[gridIndex] = [];
			}
		}
	}

	for (let i = 0; i < columnas.length; i++) {
		if (hasDuplicatedNumbers(columnas[i])) return false;
	}
	return true;
};

function hasDuplicatedNumbers(array: string[]): boolean {
	array = array.filter(value => value !== ".");
	const set = new Set(array);
	return array.length !== set.size;
}

const sudoku = [
	["8", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(sudoku));
