import Employees from "../../Pages/Employees";

function Employee() {
    const people = [
        {
            id: 0,
            name: 'Muhammad Rizki Syahputra',
            profesi: 'Sofware Engginer',
            img: 'img/riski.jpg',
            deskripsi: 'Menguasai Front-End Dan Back-End yang sudah berpengalaman selama 2 Tahun'
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


    return <>
        <Employees programmer={programmer} />
    </>


}
export default Employee