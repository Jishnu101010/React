import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function MedicineHome() {
  const user = useSelector((state) => state.auth.user);
  const storageKey = user ? "medicineList_" + user.email : null;

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    if (!storageKey) return;
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setMedicines(data);
  }, [storageKey]);

  const handleAdd = () => {
    if (medicines.length >= 5) {
      alert("You can only add 5 medicines!");
      return;
    }

    const newMed = {
      id: Date.now(),
      name,
      stock,
      createdAt: new Date().toLocaleString()
    };

    const updated = [...medicines, newMed];
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setMedicines(updated);
  };
   return (
  <div>
    <Navbar />

    <div className="container py-4">
      <h2 className="page-title mb-4">💊 Medicine Dashboard</h2>

      <div className="card p-4 mb-4">
        <h4 className="mb-3">Add New Medicine</h4>

        <div className="row">
          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Medicine Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button
              className="btn btn-success w-100"
              onClick={handleAdd}
            >
              Add Medicine
            </button>
          </div>
        </div>

        <div className="mt-3 text-muted">
          Max allowed: {medicines.length}/5 medicines
        </div>
      </div>
    </div>
  </div>
);
}

export default checkAuth(MedicineHome);
