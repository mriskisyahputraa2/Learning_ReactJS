import { useNavigate } from "react-router-dom";
import ProfilMe from "../Pages/ProfilMe";
function Profil() {
    const name = "Muhammad Rizki Syahputra";
    const saudara = "1 (Tunggal:)";
    const umur = 17;
    const deskripsi = "Harapan Orang Tua";
    const today = new Date();

    const navigate = useNavigate();
    return <>
        <ProfilMe
            name={name}
            saudara={saudara}
            umur={umur}
            deskripsi={deskripsi}
            today={today}
            navigate={navigate}
        />
    </>
}
export default Profil   