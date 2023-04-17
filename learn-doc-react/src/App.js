import Clock from "./components/Clock";
import Profil from "./components/Profil";

function App() {
  // melakukan pass data dan di tangkap menggunakan props.
  const name = "Muhammad Rizki Syahputra";
  return (
    <>
      <div className="min-h-screen border-solid border-2 border-black w-[600px] h-[400px] text-center rounded mx-auto">
        <Profil name={name} />
        <Clock />
      </div>
    </>
  );
}
export default App;
