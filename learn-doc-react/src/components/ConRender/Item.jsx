import ItemLists from "../../Pages/ItemLists"

function ItemList() {

    return <>
        <div className="flex flex-col bg-sky-500 min-h-screen">
            <section className="border-2 border-solid border-black w-[300px] my-4 p-5 rounded mb-4 bg-gray-800 mx-auto">
                <h1 className="text-2xl font-bold text-center mb-2 text-white">
                    Conditional Rendering
                </h1>
                <ul className="list-disc text-left ml-3 text-white">
                    <li><ItemLists name='Kelapa' status={true} /></li>
                    <li><ItemLists name='Sawit' status={true} /></li>
                    <li><ItemLists name='Kacang Hijau' status={false} /></li>
                </ul>
            </section>
            <a
                className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-center mx-auto"
                href="/drink-list">
                Drink List
            </a>

        </div>
    </>
}

export default ItemList