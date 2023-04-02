import { useState } from "react";
import Button from "./Button";

function MyApp() {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count + 1);
    }

    const handleClick = () => {
        alert('Welcome my Website');
    }
    return (<>
        <div>
            <h1 className="font-semibold hover:text-white text-5xl text-white drop-shadow-lg shadow-black"><button onClick={handleClick}>Welcome</button> to my App</h1>
            <Button count={count} onClick={handleCount} />
        </div>
    </>
    )
}

export default MyApp