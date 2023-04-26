import { Fragment } from "react"

function Employees({ people }) {
    return <>

        <div className="flex flex-col container mx-auto border-2 border-white w-[900px] p-2 bg-slate-900 text-white">
            {people.map((person, index) => {
                return (
                    <Fragment key={index}>
                        <div className="flex items-center my-4">
                            <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover" />
                            <div className="ml-4">
                                <h2 className="font-bold uppercase">{person.name}</h2>
                                <p>
                                    <span className="font-bold font-poppins">{person.profesi}</span>,{' '}
                                    {person.deskripsi}
                                </p>
                                <button className="bg-red-900 mt-2 py-1 px-5 rounded">Detail</button>
                            </div>
                        </div>
                        <hr />
                    </Fragment>
                )
            })}
            <div className="mx-auto flex flex-col-reverse mt-5 text-center">
                <a
                    className="bg-emerald-500 py-2 px-5 rounded mt-3 text-white"
                    href="/">Kembali
                </a>
                <a
                    className="bg-blue-500 py-2 px-5 rounded text-white "
                    href="gallery">Gallerry List
                </a>
            </div>
        </div>
    </>
}

export default Employees