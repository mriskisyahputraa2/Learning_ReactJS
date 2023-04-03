function MyApp() {

    const handleClick = () => {
        alert('Welcome to my Website');
    }
    return (<>
        <div>
            <h1 className="font-semibold hover:text-white text-5xl text-white drop-shadow-lg shadow-black"><button onClick={handleClick}>Welcome </button> to my App</h1>
        </div>
    </>
    )
}

export default MyApp