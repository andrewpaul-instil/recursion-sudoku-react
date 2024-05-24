import './App.css'
import {SudokuSquare} from "./components/SudokuSquare.tsx";
import {RefactoredSolver} from "./algorithms/RefactoredSolver.ts";
import {useState} from "react";
import {GRIDSIZE, UNKNOWNVALUE} from "./global/Constants.ts";

function App() {
    const [grid, setGrid] = useState(new Array<number>(GRIDSIZE*GRIDSIZE).fill(UNKNOWNVALUE));
    const [solvable, setSolvable] = useState("Solve");
    const resetSolvable = () => {
        setSolvable("Solve");
    }
    const solveThis = () => {
        const returnedGrid = RefactoredSolver(grid);
        if (JSON.stringify(returnedGrid) === JSON.stringify(grid)) {
            setSolvable("This is not solvable");
        } else {
            setGrid(returnedGrid);
        }
    }

  return (
    <>
        <div><SudokuSquare grid={grid} solvable={resetSolvable}/></div>
        <div className="buttongrid">
            <button
                onClick={solveThis}
                disabled={solvable !== "Solve"}
            >{solvable}</button>
        </div>

    </>
  )
}

export default App
