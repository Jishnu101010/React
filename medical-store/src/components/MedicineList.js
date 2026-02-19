import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth";

function MedicineList() {
  const user = useSelector((state) => state.auth.user);
  const storageKey = user ? "medicineList_" + user.email : null;

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const recordsPerPage = 3;

  useEffect(() => {
    if (!storageKey) return;
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setList(data);
  }, [storageKey]);

  const handleDelete = (id) => {
    const updated = list.filter((item) => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setList(updated);

    if ((page - 1) * recordsPerPage >= updated.length && page > 1) {
      setPage(page - 1);
    }
  };

  const filtered = list.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexLast = page * recordsPerPage;
  const indexFirst = indexLast - recordsPerPage;
  const current = filtered.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filtered.length / recordsPerPage) || 1;

  return (
    <div>
      <Navbar />

      <div className="container py-4">
        <h2 className="page-title mb-4">💊 Medicine List</h2>

        <div className="card p-4">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Medicine Records</h4>

            <input
              className="form-control search-box"
              placeholder="Search medicine..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // reset page when searching
              }}
              style={{ maxWidth: "300px" }}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="empty-text text-center py-4">
              No medicines found.
            </p>
          ) : (
            <>
              <table className="table table-hover table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Added Time</th>
                    <th width="140">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {current.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.stock}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm w-100"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="d-flex justify-content-center gap-3 mt-3">
                <button
                  className="btn btn-secondary pagination-btn"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Prev
                </button>

                <span className="align-self-center fw-semibold">
                  Page {page} / {totalPages}
                </span>

                <button
                  className="btn btn-secondary pagination-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default checkAuth(MedicineList);
