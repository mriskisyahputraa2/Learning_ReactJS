import DrinkLists from "../../Pages/DrinkList"

function Drink() {
    return <>
        <div className="mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <DrinkLists name="Tea" />
            <DrinkLists name="Coffee" />
            <a
                className="bg-blue-500 text-white hover:bg-blue-600 p-2 rounded my-3"
                href="/">Kembali</a>
        </div>
    </>
}
export default Drink