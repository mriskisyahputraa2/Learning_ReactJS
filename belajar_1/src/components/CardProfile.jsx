import { useState } from "react"

function CardProfile() {
    const user = {
        name: 'Muhammad Rizki Syahputra',
        img: 'img/me.jpg',
        deskripsi: 'blm ada content'
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogout() {
        setIsLoggedIn(false)
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }

    return (<>
        {isLoggedIn ? (
            <>
                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-4 mx-auto" >
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={user.img} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.deskripsi}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleLogout}
                        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-auto">Logout
                    </button>
                </div>

            </>
        ) : (
            <>
                <div>
                    <button
                        onClick={handleLogin}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto">Login</button>
                </div>
            </>

        )}

    </>)
}

export default CardProfile