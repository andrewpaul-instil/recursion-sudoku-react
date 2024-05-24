import '../App.css';
import {GRIDSIZE} from "../global/Constants.ts";
import {NumberSquare} from "./NumberSquare.tsx";

interface Props {
    grid: number[],
    solvable: () => void
}

export const SudokuSquare = ({grid, solvable}: Props) => {
    return (
        <div className="sudokugrid">
            {[...Array(GRIDSIZE*GRIDSIZE)].map((_value, index) => <NumberSquare grid={grid} key={index} position={index} solvable={solvable}/>)}
        </div>
    );
}
