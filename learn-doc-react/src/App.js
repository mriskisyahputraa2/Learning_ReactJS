import DrinkList from "./components/ConRender/DrinkList";
import Utama from "./components/ConRender/Utama";
import Profil from "./components/Profil";
import Employee from "./components/RenderList/Employee";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Profil />
        <Utama />
        <DrinkList />
        <Employee />
      </div>
    </>
  );
}
export default App;
