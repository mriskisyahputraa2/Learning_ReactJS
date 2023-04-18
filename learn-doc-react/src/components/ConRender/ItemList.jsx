function ItemList({ name, status }) {
    let itemContent = name;
    if (status) {
        itemContent = name + ' (true)';
    }

    return <>
        <div className="text-lg font-semibold my-3">
            {/* Use ternary operator */}
            {status ? (
                <del className="text-green-500">
                    Use Ternary: {name} (true)
                </del>
            ) : (
                <div className="justify-end">
                    <p className="text-red-500">Use Ternary {name} (false)</p>
                </div>
            )}

            <hr className="my-1" />

            {/* Use Operator && */}
            <div className=" text-yellow-500 font-thin">
                Use Operator &&: {name} {status && 'true'}
            </div>

            {/* Use Conditional Assigning (penugasan) to a variabel  */}
            <div>

                <b className="font-light text-blue-500 ">Use Assigning(penugasan): {itemContent}</b>
            </div >
        </div >
    </>
}

export default ItemList