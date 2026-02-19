import { useState } from "react";

function MedicineForm() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");

  const handleAdd = () => {
    let meds = JSON.parse(localStorage.getItem("medicines")) || [];

    if (meds.length >= 5) {
      alert("You can add only 5 medicines!");
      return;
    }

    const newMed = {
      id: Date.now(),
      name,
      stock,
      time: new Date().toLocaleString(),
    };

    meds.push(newMed);
    localStorage.setItem("medicines", JSON.stringify(meds));

    setName("");
    setStock("");
    window.location.reload();
  };

  return (
    <div className="form">
      <h3>Add Medicine</h3>
      <input
        placeholder="Medicine name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default MedicineForm;
