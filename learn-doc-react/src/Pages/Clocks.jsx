import { useEffect, useState } from "react";

function Clock() {
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
    const formatDate = (date) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }).format(date);
    };


    return (
        <>
            <b className="text-red-500 text-xl"> {formatTime(currentTime)}</b><br />
            <b>Hari ini :{formatDate()} </b>
        </>
    );
}
export default Clock;

// setInterval : adalah sebuah function yang menjalankan sebuah fungsi secara berulang-ulang setiap waktu yang di tentukan dalam milidetik.

// ClearInterval: adalah sebuah function yang digunakan untuk menghentikan setInterval setiap detik yang di setInterval

// setCurrentTime: digunakan untuk mengubah nilai dari sebuah state contoh diatas adalah state currentTime, mengubahnya menjadi waktu sekarang
