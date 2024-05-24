import './App.css'
import {SudokuSquare} from "./Components/SudokuSquare.tsx";
import {RefactoredSolver} from "./SolvingAlgorithms/RefactoredSolver.ts";
import {useState} from "react";
import {GRIDSIZE, UNKNOWNVALUE} from "./Constants.ts";

function App() {
    const [grid, setGrid] = useState(new Array<number>(GRIDSIZE*GRIDSIZE).fill(UNKNOWNVALUE));

    const solveThis = () => {
        setGrid(RefactoredSolver(grid));
    }

  return (
    <>
      <SudokuSquare grid={grid}/>
      <button onClick={solveThis}>Solve</button>
    </>
  )
}

export default App
