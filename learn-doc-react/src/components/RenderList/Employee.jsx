import Employees from "../../Pages/Employees";

function Employee() {
    const people = [
        {
            id: 0,
            name: 'Muhammad Rizki Syahputra',
            profesi: 'Sofware Engginer',
            img: 'img/riski.jpg',
            deskripsi: 'Seorang yang menguasai Front-End Dan Back-End yang sudah berpengalaman'
        },
        {
            id: 1,
            name: 'Alex',
            profesi: 'FrontEnd Developer',
            img: 'img/gbr1.jpg',
            deskripsi: 'Seorang FrontEnd Developer yang membuat aplikasi menjadi menarik'
        },
        {
            id: 2,
            name: 'Abby',
            profesi: 'UI/UX Developer',
            img: 'img/gbr2.jpg',
            deskripsi: 'Seorang UI/UX yang bekerja membuat desain aplikasi'
        },
        {
            id: 3,
            name: 'Adam',
            profesi: 'DevOps',
            img: 'img/gbr3.jpg',
            deskripsi: 'Seorang DevOps yang merancang sebuah aplikasi supaya aman,cepat, dan ringan '
        },
        {
            id: 4,
            name: 'Bobby',
            profesi: 'Cyber Security',
            img: 'img/gbr4.jpg',
            deskripsi: 'Seorang yang bekerja mengamankan aplikasi dari sengaran yang berbahaya'
        },
    ]
    // menampilkan object array berdasarakan dengan profesi
    // const programmer = people.filter(person =>
    //     person.profesi === 'Sofware Engginer'
    // );


    return <>
        <div className="bg-slate-800">
            <Employees people={people} />
        </div>
    </>


}
export default Employee