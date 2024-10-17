import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Biography from "./pages/Biography/Biography";
import Repertoire from "./pages/Repertoire/Repertoire";
import Schedule from "./pages/Schedule/Schedule";
import Videos from "./pages/Videos/Videos";
import Contact from "./pages/Contact/Contact";
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
        <Route path='schedule' element={<Schedule />} />
        <Route path='videos' element={<Videos />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
