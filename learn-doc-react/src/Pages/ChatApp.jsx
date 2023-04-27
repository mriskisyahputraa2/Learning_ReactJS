import { useState } from "react"

export default function ChatApp() {
    const [to, setTo] = useState('Rizki'); /// membuat state nilai default To siapa yang mau di kirim sesuai dengan value option
    const [message, setMessage] = useState(''); // state message 

    // fungsi handleSumbit ketika input data
    function handleSubmit(e) {
        e.preventDefault(); // memanipulasi data yang diInput kedalam form, supaya browser tidak melakukan refrash layar

        alert(`You said ${message} to ${to}`)
    }


    return <>
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col max-w-screen-lg p-20">
                <label className="text-white">
                    To: {' '}
                    <select
                        value={to}
                        onChange={e => setTo(e.target.value)}
                        className="text-black "
                    >
                        <option value="Rizki">Rizki</option>
                        <option value="Fadilla">Fadilla</option>
                        <option value="Alex">Alex</option>
                        <option value="Abby">Abby</option>
                    </select>
                </label>
                <textarea
                    className="w-[30%] mt-3 px-2 pt-1"
                    placeholder="Message ..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                >
                </textarea>
                <button
                    className="bg-green-500 mr-auto px-4 py-1 text-white font-bold rounded-md my-4"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    </>
}