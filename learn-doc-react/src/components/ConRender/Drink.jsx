import DrinkLists from "../../Pages/DrinkList"

function Drink() {
    return <>
        <div className="mx-auto flex flex-col justify-center items-center">
            <DrinkLists name="Tea" />
            <DrinkLists name="Coffee" />
            <a
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded my-3"
                href="/">Kembali</a>
        </div>
    </>
}
export default Drink