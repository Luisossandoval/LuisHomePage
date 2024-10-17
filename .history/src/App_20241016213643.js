import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Biography from "./pages/Biography/Biography";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='biography' element={<Biography />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
