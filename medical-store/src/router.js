import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MedicineHome from "./components/MedicineHome";
import MedicineList from "./components/MedicineList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/med-home",
    element: <MedicineHome />,
  },
  {
    path: "/med-list",
    element: <MedicineList />,
  },
]);

export default router;
