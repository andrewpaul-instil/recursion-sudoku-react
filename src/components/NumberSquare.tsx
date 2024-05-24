import React from "react";

interface Props {
    position: number;
    grid: number[];
    solvable: () => void
}
export const NumberSquare = ({position, grid, solvable}: Props) => {
    const limit = (element: React.KeyboardEvent<HTMLInputElement>) =>
    {
        const max_chars = 1;

        if(element.currentTarget.value.length > max_chars) {
            element.currentTarget.value = element.key; // currentTarget.value.substring(0, max_chars);
        }
    }
    return (
        <input className={borderSetter(position)}
               key={position}
               type="number"
               size={1}
               defaultValue={grid[position] == 0 ? "" : grid[position]}
               onChange={
                    event => {
                        grid[position] = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
                        solvable;
                    }}
               min={1}
               max={9}
               maxLength={1}
               onKeyDown={event => limit(event)}
               onKeyUp={event => limit(event)}
        >
        </input>
        );
}

const borderSetter = (position: number) => {
    const squareNumber = position + 1;
    let classString = "numbersquare";
    classString += squareNumber % 3 == 0 ? " innerrightedge" : "";
    classString += (squareNumber >= 19 && squareNumber <= 27) || (squareNumber >= 46 && squareNumber <= 54) ? " innerbottomedge" : "";
    return classString;
}
