function CoffeeList({ drinkers }) {
    return <>
        {/* <div>
            <ol className="list-decimal">
                <li>Boil <b className="text-slate-500">{drinkers}</b> cups of water</li>
                <li>Add <b className="text-fuchsia-500">{drinkers}</b> spoons of Coffee and <b className="text-green-500">{0.5 * drinkers}</b> spoons of spice</li>
                <li>Add <b className="text-yellow-500">{0.5 * drinkers}</b> cups of milk to boil and sugar to taste </li>
            </ol>
        </div > */}
        <div>
            <ol className="list-decimal ml-4">
                <li>
                    Boil <b className="text-gray-700">{drinkers} cups</b> of water
                </li>
                <li>
                    Add <b className="text-pink-600">{drinkers} spoons</b> of coffee and <b className="text-green-600">{0.5 * drinkers} spoons</b> of spice
                </li>
                <li>
                    Add <b className="text-yellow-600">{0.5 * drinkers} cups</b> of milk to boil and sugar to taste
                </li>
            </ol>
        </div>
    </>
}
export default CoffeeList