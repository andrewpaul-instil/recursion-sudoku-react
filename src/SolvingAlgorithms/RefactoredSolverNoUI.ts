import {Gridsize, MiddleSquareSize, UnknownSquareValue} from "../Constants.ts";

export const RefactoredSolverNoUI = () => {
    const board: number[][] = [
        [7, 0, 2, 0, 5, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 0],
        [1, 0, 0, 0, 0, 9, 5, 0, 0],
        [8, 0, 0, 0, 0, 0, 0, 9, 0],
        [0, 4, 3, 0, 0, 0, 7, 5, 0],
        [0, 9, 0, 0, 0, 0, 0, 0, 8],
        [0, 0, 9, 7, 0, 0, 0, 0, 5],
        [0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 7, 0, 4, 0, 2, 0, 3]
    ];
    printBoard(board);

    if (solveBoard(board)) {
        console.log("Solved successfully!");
        printBoard(board);
    }
    else {
        console.log("This board cannot be solved!");
    }

}



const printBoard = (board: number[][]) => {
    let result: string = "";
    for (let row: number = 0; row < Gridsize; row++) {
        if (row % MiddleSquareSize == 0 && row != 0) {
            result += "-----------\n";
        }
        for (let column: number = 0; column < Gridsize; column++) {
            if (column % MiddleSquareSize == 0 && column != 0) {
                result += "|";
            }
            result += board[row][column];
        }
        result += "\n";
    }
    console.log(result);
}


const isNumberInRow = (board: number[][], value: number, row: number) => {
    for (let column: number = 0; column < Gridsize; column++) {
        if (board[row][column] == value) {
            return true;
        }
    }
    return false;
}

const isNumberInColumn = (board: number[][], value: number, column: number) => {
    for (let row: number = 0; row < Gridsize; row++) {
        if (board[row][column] == value) {
            return true;
        }
    }
    return false;
}

const isNumberInMiddleSquare = (board: number[][], value: number, row: number, column: number) => {
    const middleSquareRow = row - row % 3;
    const middleSquareColumn = column - column % 3;

    for (let row = middleSquareRow; row < middleSquareRow + 3; row++) {
        for (let column = middleSquareColumn; column < middleSquareColumn + 3; column++) {
            if (board[row][column] == value) {
                return true;
            }
        }
    }
    return false;
}

const isValidPlacement = (board: number[][], value: number, row: number, column: number) => {
    return !isNumberInRow(board, value, row) &&
        !isNumberInColumn(board, value, column) &&
        !isNumberInMiddleSquare(board, value, row, column);
}

const solveBoard = (board: number[][]): boolean => {
    return solve(board, 0, 0);
}

const solve = (board: number[][], row: number, column: number): boolean => {
    if (isSolved(row)) {
        return true;
    }

    const [nextRow, nextColumn] = getNextSquare(row, column);

    if (!isUnknownSquare(board, row, column)) {
        return solve(board, nextRow, nextColumn);
    }

    return tryValues(board, row, column, nextRow, nextColumn);
}

const isSolved = (row: number): boolean => {
    return row == Gridsize;
}

const getNextSquare = (row: number, column: number): [number, number] => {
    return (column == Gridsize - 1) ? [row + 1, 0] : [row, column + 1];
}

const isUnknownSquare = (board: number[][], row: number, column: number): boolean => {
    return board[row][column] == UnknownSquareValue;
}

const tryValues = (board: number[][], row: number, column: number, nextRow: number, nextColumn: number): boolean => {
    for (let valueToTry: number = 1; valueToTry <= Gridsize; valueToTry++) {
        if (isValidPlacement(board, valueToTry, row, column)) {
            board[row][column] = valueToTry;

            if (solve(board, nextRow, nextColumn)) {
                return true;
            }

            board[row][column] = UnknownSquareValue;
        }
    }
    return false;
}
