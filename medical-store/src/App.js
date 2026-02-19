import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MedicineHome from "./components/MedicineHome";
import MedicineList from "./components/MedicineList";
import AutoLogin from "./components/auth/AutoLogin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AutoLogin>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/med-home" element={<MedicineHome />} />
          <Route path="/med-list" element={<MedicineList />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </AutoLogin>
    </BrowserRouter>
  );
}

export default App;
