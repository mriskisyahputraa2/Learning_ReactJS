import NotFound from "./Pages/NotFound";
import Coffee from "./components/CompPure/Coffee";
import Drink from "./components/ConRender/Drink";
import Item from "./components/ConRender/Item";
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
            <Route path="/item-list" element={<Item />} />
            <Route path="/drink-list" element={<Drink />} />
            <Route path="/coffee-list" element={<Coffee />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
