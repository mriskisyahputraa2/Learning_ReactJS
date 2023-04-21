function Employees({ programmer }) {
    return <>
        <div className="flex flex-col container mx-auto border-2 border-slate-800 w-[900px] h-[200px] my-3 p-2 bg-slate-700 text-white">
            {programmer.map((person) => {
                return (
                    <div className="flex items-center mb-4" key={person.id}>
                        <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover" />
                        <div className="ml-4">
                            <h2 className="font-bold uppercase">{person.name}</h2>
                            <p>
                                <span className="font-bold text-red-500">{person.profesi}</span>{' '}
                                {person.deskripsi}
                            </p>
                        </div>
                    </div>
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