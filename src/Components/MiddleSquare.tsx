import {NumberSquare} from "./NumberSquare.tsx";
import {Gridsize} from "../Constants.ts";

export const MiddleSquare = () => {

    return (
       <div className="middlegrid">
           {[...Array(Gridsize)].map((_e, index) => <NumberSquare key={index}/>)}
       </div>
    );
}
