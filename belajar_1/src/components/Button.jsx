import { useState } from "react"

function Button({ count, onClick }) {
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
                <h3>Counters that update together</h3>
                <button onClick={onClick}>
                    Clicked {count} times
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