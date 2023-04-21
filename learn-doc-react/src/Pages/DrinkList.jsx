function DrinkLists({ name }) {
    return <>
        <section className=" text-white mt-3 p-3 border-2 border-black w-[250px] flex flex-col mx-auto items-center bg-gray-400 rounded-lg">
            <h1 className="text-2xl font-bold">{name}</h1>
            <dl>
                <dt className="text-xl text-black">Part Of Plan</dt>
                <dd>{name === 'Tea' ? (
                    <p className="text-orange-500 font-bold">Leaf</p>
                ) : (
                    <p className="text-red-500 italic font-bold">Been</p>
                )}
                </dd><hr className="my-2" />
                <dt className="text-xl text-black">Caffeine Content</dt>
                <dd>{name === 'Tea' ? (
                    <p className="text-orange-500 font-bold">15-70 mg/cup</p>
                ) : (
                    <p className="text-red-500 italic font-bold">80-185 mg/cup</p>
                )}
                </dd><hr className="my-2" />
                <dt className="text-xl text-black">Age</dt>
                <dd>{name === 'Tea' ? (
                    <p className="text-orange-500 font-bold">4,000+ years</p>
                ) : (
                    <p className="text-red-500 italic font-bold">1,000+ years</p>
                )}
                </dd><hr className="my-2" />

            </dl>

        </section>

    </>
}

export default DrinkLists