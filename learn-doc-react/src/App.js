import Clock from "./components/Clock";
import Utama from "./components/ConRender/Utama";
import Profil from "./components/Profil";

function App() {
  // melakukan pass data dan di tangkap menggunakan props.
  const name = "Muhammad Rizki Syahputra";
  return (
    <>
      <div className=" min-h-[1024px] border-solid border-2 border-black w-[600px] text-center rounded mx-auto">
        <Profil name={name} />
        <Clock />
        <div className="flex justify-center ">
          <Utama />
        </div>
      </div>
    </>
  );
}
export default App;
