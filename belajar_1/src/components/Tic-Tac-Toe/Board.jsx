import { useState } from "react";
import Squere from "./Squere";
import WhoWinner from "./WhoWinner";

export default function Board() {
    const [squeres, setSqueres] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        if (WhoWinner(squeres) || squeres[i]) {
            return;
        }

        const nextSqueres = squeres.slice();
        if (xIsNext) {
            nextSqueres[i] = "X";
        } else {
            nextSqueres[i] = "O";
        }
        setSqueres(nextSqueres);
        setXIsNext(!xIsNext);
    }


    const winner = WhoWinner(squeres);
    let status;
    if (winner) {
        status = 'Winner : ' + winner;
    } else {
        status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    return (<>
        <hr className="mb-2" />
        <h1 className="text-3xl font-bold mb-3">Tic Tac Toe</h1>
        <div className="my-4 font-bold text-xl text-rose-800">{status}</div>
        <div className="flex justify-center ">
            <div>
                <Squere value={squeres[0]} onSquareClick={() => handleClick(0)} />
                <Squere value={squeres[1]} onSquareClick={() => handleClick(1)} />
                <Squere value={squeres[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div>
                <Squere value={squeres[3]} onSquareClick={() => handleClick(3)} />
                <Squere value={squeres[4]} onSquareClick={() => handleClick(4)} />
                <Squere value={squeres[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div>
                <Squere value={squeres[6]} onSquareClick={() => handleClick(6)} />
                <Squere value={squeres[7]} onSquareClick={() => handleClick(7)} />
                <Squere value={squeres[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>

    </>)
}