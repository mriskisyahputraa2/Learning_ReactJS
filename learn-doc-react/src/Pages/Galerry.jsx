import { useState } from "react"
import { DataGallery } from "../components/AddInteract/DataGalerry";

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < DataGallery.length - 1;


    const handleNextClik = () => {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }


    const handleMoreClick = () => {
        setShowMore(!showMore);
    }

    let dataGalerry = DataGallery[index];

    return <>
        <div className="bg-teal-600 min-h-screen">
            <div className="max-w-screen-lg mx-auto px-4 py-8 text-gray-100 font-poppins">
                <div className="border-2 border-slate-800 p-4">
                    <h2 className="text-green-500"><b className="text-white">Name:</b> {dataGalerry.name}</h2>
                    <p className="text-sky-400"><b className="text-white">Profesi: </b> {dataGalerry.profesi}</p>

                    <img
                        className="w-[170px] h-[170px] rounded-full object-cover my-3"
                        src={dataGalerry.img}
                        alt={dataGalerry.alt}
                    />

                    <div className="mt-5">

                        <button
                            onClick={handleNextClik}
                            className="bg-gray-500 py-1 px-6 rounded text-white mr-5"
                        >Next <b>{index + 1}</b>
                        </button>
                        <button
                            onClick={handleMoreClick}
                            className="bg-red-500 py-1 px-2 rounded text-white"
                        >{showMore ? 'Hide' : 'Show'} Details
                        </button>
                        {showMore && <p className="mt-2">{dataGalerry.description}</p>}
                    </div>
                </div>
            </div>
            <div className="flex justify-center item-center ">
                <a
                    className="bg-blue-500 py-2 px-5 rounded text-white drop-shadow-md"
                    href="/">Kembali
                </a>
            </div>
        </div>
    </>
}
export default Gallery