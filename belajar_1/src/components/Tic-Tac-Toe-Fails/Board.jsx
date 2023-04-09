import { useState } from "react";
import Squere from "./Squere";
import CalculateWinner from "./CalculateWinner";

export default function Board() {
    // conts yang menyimpan array 
    const [squeres, setSqueres] = useState(Array(9).fill(null))
    // conts yang menyimpan giliran X atau O
    const [xIsNext, setXIsNext] = useState(true);

    // ketika handleClick di Click
    const handleClick = (i) => {
        // jika calculasi yang benar sama dengan array squeres atau squeres dengan index nya
        if (CalculateWinner(squeres) || squeres[i]) {
            return;
        }

        // menduplikat array dengan slice dan disimpan ke dalam variabel nexSqueres
        const nextSqueres = squeres.slice();

        // jika xIsNext bernilai true
        if (xIsNext) {
            //  maka
            nextSqueres[i] = "X";
            // jika false
        } else {
            // maka
            nextSqueres[i] = "O";
        }
        setSqueres(nextSqueres);
        setXIsNext(!xIsNext);
    }

    // calculasi jika siapa yang menang
    const winner = CalculateWinner(squeres);
    let status;
    //  jika ada yang menang
    if (winner) {
        // maka tampilkan ke display siapa yang menang
        status = 'Winner : ' + winner;

        // jika kalah tidak tampilkan siapa yang menang 
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