function ItemList({ name, status }) {
    let itemContent = name;

    if (status) {
        itemContent = name + ' (true)';
    }

    return <>
        {/* Use ternary operator */}
        <div className="text-lg font-semibold my-3">
            {status ? (
                <del className="text-green-600">
                    Use Ternary: {name} (true)
                </del>
            ) : (
                <p className="text-red-600">Use Ternary {name} (false)</p>
            )}
            <hr />

            {/* Use Operator && */}
            <div className="text-fuchsia-600 font-thin">
                Use Operator &&: {name} {status && 'true'}
            </div>

            {/* Use Conditional Assigning (penugasan) to a variabel  */}
            <b className="font-light">Use Assigning(penugasan): {itemContent}</b>
        </div>
    </>
}

export default ItemList