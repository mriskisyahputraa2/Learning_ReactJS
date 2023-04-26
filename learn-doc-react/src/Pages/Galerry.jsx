import { useState } from "react"
import { DataGallery } from "../components/AddInteract/DataGalerry";

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < DataGallery.length + 1;


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
        <div className="max-w-screen-md mx-auto px-4 py-8">
            <button
                onClick={handleNextClik}
                className="bg-gray-500 py-1 px-6 rounded text-white "
            >Next
            </button>
            <h2>{dataGalerry.name}</h2>
            <p>Call {dataGalerry.called}</p>
            <h3>({index + 1} of {dataGalerry.length})</h3>


            <button
                onClick={handleMoreClick}
                className="bg-red-500 py-1 px-2 rounded text-white "
            >
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {showMore && <p>{dataGalerry.description}</p>}
            <img
                className="w-[200px] h-[200px] rounded-full object-cover "
                src={dataGalerry.img}
                alt={dataGalerry.alt} />
        </div>
    </>
}
export default Gallery