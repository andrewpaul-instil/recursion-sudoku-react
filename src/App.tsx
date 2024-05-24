
import './App.css'
import {SudokuSquare} from "./Components/SudokuSquare.tsx";
import {OriginalSolverNoUI} from "./SolvingAlgorithms/OriginalSolverNoUI.ts";
import {RefactoredSolverNoUI} from "./SolvingAlgorithms/RefactoredSolverNoUI.ts";

function App() {

    const solveThis = () => {
        console.log("Solving!");
    }

    OriginalSolverNoUI();
    RefactoredSolverNoUI();

  return (
    <>
      <SudokuSquare/>
      <button onClick={solveThis}>Solve</button>
    </>
  )
}

export default App
