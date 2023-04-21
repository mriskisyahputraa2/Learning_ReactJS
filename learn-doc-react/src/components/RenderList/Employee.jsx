function Employee() {
    const people = [
        {
            id: 0,
            name: 'Riski',
            profesi: 'Sofware Engginer',
            img: 'img/riski.jpg',
            deskripsi: 'Seorang Sofware Engginer dalam semua bidang'
        },
        {
            id: 1,
            name: 'Alex',
            profesi: 'FrontEnd Developer',
            img: 'img/gbr1.jpg',
            deskripsi: 'Seorang FrontEnd Developer dalam semua bidang'
        },
    ]
    const programmer = people.filter(person =>
        person.profesi === 'Sofware Engginer'
    );

    const employeeList = programmer.map((person) => (
        <div className="flex items-center mb-4" key={person.id}>
            <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover" />
            <div className="ml-4">
                <h2 className="font-bold">{person.name}</h2>
                <p>
                    <span className="font-bold">{person.profesi}</span>{' '}
                    {person.deskripsi}
                </p>
            </div>
        </div>
    ));

    return <div className="container mx-auto">{employeeList}</div>;

}
export default Employee