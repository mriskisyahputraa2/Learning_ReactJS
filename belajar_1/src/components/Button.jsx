import { useState } from "react"

function Button(props) {
    const [click, setClick] = useState(false);

    function handleClik() {
        setClick(true)
    }

    function handleClose() {
        setClick(false)
    }

    return (<>
        {click ? (
            <>
                <h3 className="text-xl font-mono font-bold text-gray-700 my-3">Counters that update together</h3>
                <button
                    className="bg-green-500 mx-auto p-3 rounded-md text-cyan-950"
                    onClick={props.handleCount}>
                    Clicked <b className="font-bold p-2 bg-gray-400 rounded-full text-black">{props.count}</b> times
                </button>
                <button
                    className="bg-sky-900 mx-auto p-3 mt-3 rounded-md text-white"
                    onClick={props.handleCount}>
                    Clicked <b className="font-bold p-2 bg-gray-400 rounded-full text-black">{props.count}</b> times
                </button>
                <button
                    onClick={handleClose}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-auto my-4">Close
                </button>
            </>

        ) : (
            <button
                onClick={handleClik}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg my-4 mx-auto">Count
            </button>
        )}
    </>)
}
export default Button