import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Biography from "./pages/Biography/Biography";
import { Navbar } from "react-bootstrap";
import { Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}></Route>
    </Routes>
  );
}

export default App;
