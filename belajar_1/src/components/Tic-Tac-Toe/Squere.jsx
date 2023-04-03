import { useState } from "react"

function Squere(props) {

    return (<>
        <div>
            <button
                onClick={props.onSquareClick}
                className="border-solid border-2 border-gray-500 mx-auto p-3 font-bold">{props.value}</button>
        </div>
    </>)
}

export default Squere