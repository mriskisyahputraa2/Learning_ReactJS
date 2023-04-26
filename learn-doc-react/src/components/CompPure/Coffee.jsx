import CoffeeList from "../../Pages/CoffeeList"

function Coffee() {
    return <>
        <div className="bg-emerald-500 min-h-screen">
            <section className="max-w-screen-md mx-auto px-4 py-8">
                <div className="bg-white border-2 border-black p-6 rounded-lg">
                    <h1 className="text-2xl font-bold text-center mb-2">How to make Coffee</h1>
                    <hr className="my-2" />
                    <h3 className="text-xl font-medium text-indigo-600 my-2">#For two</h3>
                    <CoffeeList drinkers={2} />
                    <br />
                    <hr />
                    <h3 className="text-xl font-medium text-indigo-600 my-2">#For a gathering</h3>
                    <CoffeeList drinkers={4} />
                </div>
            </section>

            <div className="flex justify-center mt-4">
                <a href="/" className="inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Kembali</a>
            </div>
        </div>
    </>
}
export default Coffee