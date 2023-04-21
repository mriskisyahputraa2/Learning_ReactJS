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
                                    <span className="font-bold text-red-500">{person.profesi}</span>{' '}
                                    {person.deskripsi}
                                </p>
                            </div>
                        </div>
                        <hr />
                    </Fragment>
                )
            })}
            <a
                className="bg-sky-500 hover:bg-sky-600 p-2 rounded my-6 text-white mx-auto"
                href="/">Kembali
            </a>
        </div>
    </>
}

export default Employees