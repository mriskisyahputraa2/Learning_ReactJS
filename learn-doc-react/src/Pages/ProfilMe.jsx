import Clocks from "./Clocks"

function ProfilMe({ name, saudara, umur, deskripsi, navigate }) {
    return <>
        <div className="mt-3 w-[450px] h-auto border-2 border-black relative mx-auto">
            <div className="flex flex-col justify-center items-center">
                <h1 className=" text-3xl my-4 font-bold">{name}</h1>
                <img
                    className=" rounded-lg drop-shadow-md my-2"
                    src={process.env.PUBLIC_URL + "/img/me.jpg"}
                    alt={name}
                    width={200}
                    height={200}
                />
                <ul>
                    <li>
                        <b>Jumlah Saudara: </b>
                        {saudara}
                    </li>
                    <li>
                        <b>Umur: </b>
                        {umur}
                    </li>
                    <li>
                        <b>Deskripsi:</b> {deskripsi}
                    </li>
                    <li>
                        <b>JAM: <Clocks /></b>
                    </li>

                </ul>
                <div className="my-2">
                    <button
                        className="mr-3 bg-green-500 hover:bg-green-600 p-2  rounded-lg text-white my-2"
                        onClick={() => navigate('/employee')}>
                        Employee
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 p-2  rounded-lg text-white my-2"
                        onClick={() => navigate('/item-list')}>
                        Item List
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default ProfilMe