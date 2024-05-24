import '../App.css';
import {GRIDSIZE} from "../Constants.ts";
import {NumberSquare} from "./NumberSquare.tsx";

interface Props {
    grid: number[]
}

export const SudokuSquare = ({grid}: Props) => {
    return (
        <div className="sudokugrid">
            {[...Array(GRIDSIZE*GRIDSIZE)].map((_value, index) => <NumberSquare grid={grid} key={index} position={index}/>)}
        </div>
    );
}
