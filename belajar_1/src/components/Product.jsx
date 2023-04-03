import { useState } from "react"
import Button from "./Button";

function Product() {
    const [click, setClick] = useState(false);
    const [count, setCount] = useState(0);
    const products = [
        { id: 1, title: 'Apple' },
        { id: 2, title: 'Samsung' },
        { id: 3, title: 'Oppo' },
    ]

    const handleCount = () => {
        setCount(count + 1);
    }

    const handleClick = () => {
        setClick(true);
    }

    const handleClose = () => {
        setClick(false);
    }

    return (<>
        {click ? (
            <>

                {products.map((item, index) => {
                    return <>
                        <ul className="list-none w-80 p-3 rounded-lg m-1 bg-gray-100 hover:bg-gray-300 mx-auto drop-shadow-md">
                            <li
                                key={index}>
                                <a className="focus:text-purple-600" href="#blmada">{item.title}</a>
                            </li>
                        </ul>

                    </>
                })}

                <button
                    onClick={handleClose}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-auto mt-4">Close Product
                </button>

            </>
        ) : (
            <>
                <button
                    onClick={handleClick}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg mx-auto">Product
                </button>
            </>
        )}
        <Button handleCount={handleCount} count={count} />
    </>
    )
}

export default Product