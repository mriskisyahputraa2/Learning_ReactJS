function Drink({ name }) {
    return <>
        <div className="relative bottom-[30rem] ">
            <section className="mt-2 border-2 border-black w-[250px] flex flex-col justify-end ml-auto items-center bg-slate-400">
                <h1 className="text-2xl font-bold">{name}</h1>
                <dl>
                    <dt className="text-xl">Part Of Plan</dt>
                    <dd>{name === 'Tea' ? (
                        <p className="text-orange-500 font-bold">Leaf</p>
                    ) : (
                        <p className="text-red-500 italic font-bold">Been</p>
                    )}
                    </dd>
                    <dt className="text-xl">Caffeine Content</dt>
                    <dd>{name === 'Tea' ? (
                        <p className="text-orange-500 font-bold">15-70 mg/cup</p>
                    ) : (
                        <p className="text-red-500 italic font-bold">80-185 mg/cup</p>
                    )}
                    </dd>
                    <dt className="text-xl">Age</dt>
                    <dd>{name === 'Tea' ? (
                        <p className="text-orange-500 font-bold">4,000+ years</p>
                    ) : (
                        <p className="text-red-500 italic font-bold">1,000+ years</p>
                    )}
                    </dd>

                </dl>
            </section>

        </div>
    </>
}


export default function DrinkList() {
    return <>
        <div>
            <Drink name="Tea" />
            <Drink name="Coffee" />
        </div>
    </>
}