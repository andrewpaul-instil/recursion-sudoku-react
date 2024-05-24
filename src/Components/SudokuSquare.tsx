import '../App.css';
import {MiddleSquare} from "./MiddleSquare.tsx";
import {Gridsize} from "../Constants.ts";

export const SudokuSquare = () => {
    return (
        <div className="sudokugrid">
            {[...Array(Gridsize)].map((_value, index) => <MiddleSquare key={index}/>)}
        </div>
    );
}
