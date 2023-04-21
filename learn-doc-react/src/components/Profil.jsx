import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profil() {
  const name = "Muhammad Rizki Syahputra";
  const saudara = "1 (Tunggal:)";
  const umur = 17;
  const deskripsi = "Harapan Orang Tua";
  const today = new Date();

  const navigate = useNavigate();

  //   formate Date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(date);
  };


  // membuat state dengan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  // proses membuat detik
  useEffect(() => {
    // menjalankan fungsi detik dengan setInterval yang disimpan dalam v-interValid
    const interValId = setInterval(() => {
      // data setInterval sudah jalan selama satu detik, trs di ubah menjadi waktu sekarang
      setCurrentTime(new Date());
    }, 1000); // 1 detik

    // dan bersihkan(unmount) detiknya dengan clearInterval
    return () => clearInterval(interValId);
  }, []);

  // mengubah objek wakt menjadi format jam yang sesuai
  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
  }
  return (
    <>
      <div className="mt-3 w-[450px] h-auto border-2 border-black relative">
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
              <b>Hari Ini: </b>
              {formatDate(today)}
            </li>
          </ul>
          <div className="text-2xl">
            <p className="text-red-500">
              <b className="text-black">JAM: </b>
              {formatTime(currentTime)}
            </p>
          </div>

          <button onClick={() => navigate('/item-list')}>Go to Item-List</button>
        </div>
      </div>
    </>
  );
}
export default Profil;
