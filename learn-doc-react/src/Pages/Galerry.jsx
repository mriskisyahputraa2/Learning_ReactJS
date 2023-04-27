import { useState } from "react"
import { DataGallery } from "../components/AddInteract/DataGalerry";
import ChatApp from "./ChatApp";

function Gallery() {
    const [index, setIndex] = useState(0); // untuk menentukan index gambar mana yang ditampilkan pada data gallery
    const [showMore, setShowMore] = useState(false); // untuk deskripsi foto yang bernilai false
    const hasNext = index < DataGallery.length - 1; // untuk menampilkan foto selanjutnya

    // fungsi handleNext
    const handleNextClik = () => {
        // jika hasNext diclick
        if (hasNext) {
            // maka data index nya ditambah + 1 dan menampilkan data baru 
            setIndex(index + 1);
        } else {
            // jika data index sudah habis maka kembali ke index 0 
            setIndex(0);
        }
    }

    // fungsi handleMore 
    const handleMoreClick = () => {
        // nilai awal akan false(showDetails), ketika di clik akan true(Hide Details) 
        setShowMore(!showMore);
    }

    let dataGalerry = DataGallery[index];

    return <>
        <div className="bg-teal-600 min-h-screen">
            <div className="max-w-screen-sm  px-4 py-8 text-gray-100 font-poppins float-right">
                <div className="border-2 border-white p-4 bg-emerald-500">
                    <h2 className="font-poppins font-bold"><b className="text-white font-mono">Name:</b> {dataGalerry.name}</h2>
                    <p className="font-poppins font-bold"><b className="text-white font-mono">Profesi: </b> {dataGalerry.profesi}</p>

                    <img
                        className="w-[170px] h-[170px] rounded-full object-cover my-3 drop-shadow-xl"
                        src={dataGalerry.img}
                        alt={dataGalerry.alt}
                    />

                    <div className="mt-5">

                        {/* button next */}
                        <button
                            onClick={handleNextClik}
                            className="bg-gray-500 py-1 px-6 rounded text-white mr-5"
                        >Next <b>{index + 1}</b>
                        </button>

                        {/* button more */}
                        <button
                            onClick={handleMoreClick}
                            className="bg-red-500 py-1 px-2 rounded text-white">
                            {showMore ? 'Hide' : 'Show'} Details {/* showMore bernilai false, jadi awalnya itu akan menampilakn Show Details, tapi ketika di clik akan menampilkan Hide Details*/}
                        </button>

                        {/* descripsi data */}
                        {showMore && <p className="mt-2">{dataGalerry.description}</p>} {/* jika showmore false tidak akan menampilkan deskripsi, jika true akan di tampilkan*/}
                    </div>
                </div>
                <div className="flex justify-center mt-3 item-center ">
                    <a
                        className="bg-blue-500 py-2 px-5 rounded text-white drop-shadow-md"
                        href="/">Kembali
                    </a>
                </div>
            </div>
            <ChatApp />
        </div>
    </>
}
export default Gallery