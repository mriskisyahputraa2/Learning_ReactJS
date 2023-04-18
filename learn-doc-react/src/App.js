import DrinkList from "./components/ConRender/DrinkList";
import Utama from "./components/ConRender/Utama";
import Profil from "./components/Profil";

function App() {
  // melakukan pass data dan di tangkap menggunakan props.
  const name = "Muhammad Rizki Syahputra";
  return (
    <>
      <div className=" min-h-[1024px] ">
        <Profil name={name} />
        <Utama />
        <DrinkList />
      </div>
    </>
  );
}
export default App;
