import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Biography from "./pages/Biography/Biography";
import Repertoire from "./pages/Repertoire/Repertoire";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='biography' element={<Biography />} />
        <Route path='repertoire' element={<Repertoire />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
