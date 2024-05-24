interface Props {
    position: number;
    grid: number[]
}
export const NumberSquare = ({position, grid}: Props) => {
    return (
        <input className={borderSetter(position)}
               key={position}
               type="number"
               size={1}
               defaultValue={grid[position] == 0 ? "" : grid[position]}
               onChange={event => grid[position] = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)}></input>
        );
}

const borderSetter = (position: number) => {
    const squareNumber = position + 1;
    let classString = "numbersquare";
    classString += squareNumber % 3 == 0 ? " innerrightedge" : "";
    classString += (squareNumber >= 19 && squareNumber <= 27) || (squareNumber >= 46 && squareNumber <= 54) ? " innerbottomedge" : "";
    return classString;
}
