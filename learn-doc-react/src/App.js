import NotFound from "./Pages/NotFound";
import DrinkList from "./components/ConRender/DrinkList";
import Utama from "./components/ConRender/Utama";
import Profil from "./components/Profil";
import Employee from "./components/RenderList/Employee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="min-h-full">
        <Router>
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="/item-list" element={<Utama />} />
            <Route path="/drink" element={<DrinkList />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
