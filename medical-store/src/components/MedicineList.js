import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function MedicineList() {
  const [meds, setMeds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 2;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("medicines")) || [];
    setMeds(data);
  }, []);

  const handleDelete = (id) => {
    const updated = meds.filter((m) => m.id !== id);
    localStorage.setItem("medicines", JSON.stringify(updated));
    setMeds(updated);
  };

  const filtered = meds.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  return (
    <div>
      <h3>Medicine List</h3>

      <input
        placeholder="Search medicine..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {paginated.map((m) => (
        <div key={m.id} className="card">
          <p>Name: {m.name}</p>
          <p>Stock: {m.stock}</p>
          <p>Added: {m.time}</p>
          <button onClick={() => handleDelete(m.id)}>Delete</button>
        </div>
      ))}

      <Pagination
        total={filtered.length}
        perPage={perPage}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </div>
  );
}

export default MedicineList;
