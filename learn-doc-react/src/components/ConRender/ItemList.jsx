function ItemList({ name, status }) {
    return <>
        {/* Use ternary operator */}
        <div className="text-lg font-semibold">
            {status ? (
                <del className="text-green-600">
                    Use Ternary: {name} '(true)'
                </del>
            ) : (
                <p className="text-red-600">Use Ternary {name} (false)</p>
            )}
            <hr />
        </div>

        {/* Use Operator && */}
        <div className="text-fuchsia-600 font-thin">
            Use &&: {name} {status && 'true'}
        </div>
    </>
}

export default ItemList