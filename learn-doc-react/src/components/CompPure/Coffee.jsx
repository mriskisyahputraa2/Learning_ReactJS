import CoffeeList from "../../Pages/CoffeeList"

function Coffee() {
    return <>
        <div className="w-[500px] border-2 border-black mx-auto my-4 p-6">
            <section>
                <h1 className="text-2xl font-poppins text-center mb-2">How to make Coffee</h1> <hr className="mb-2" />
                <h3 className="text-xl text-indigo-600 font-poppins my-2">#For two</h3>
                <CoffeeList drinkers={2} /> <br /> <hr />
                <h3 className="text-xl text-indigo-600 font-poppins my-2">#For a gathering</h3>
                <CoffeeList drinkers={4} />
            </section>
        </div>
    </>
}
export default Coffee