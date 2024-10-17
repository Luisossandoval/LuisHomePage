import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Biography from "./pages/Biography/Biography";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Repertoire from "./pages/Repertoire/Repertoire";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='biography' element={<Biography />} />
        <Route path='repertoire' element={<Repertoire />} />
        <Route path='schedule' element={<Schedule />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
