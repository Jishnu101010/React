import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import checkAuth from "./auth/checkAuth";
import { useSelector } from "react-redux";

function MedicineList() {
  const user = useSelector((state) => state.auth.user);
  const storageKey = user ? "medicineList_" + user.email : null;

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedStock, setEditedStock] = useState("");

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    if (!storageKey) return;
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];
    setItems(data);
  }, [storageKey]);

  const saveToStorage = (data) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
    setItems(data);
  };

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id);
    saveToStorage(updated);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditedName(item.name);
    setEditedStock(item.stock);
  };

  const handleSave = () => {
    const updated = items.map((item) =>
      item.id === editingId
        ? { ...item, name: editedName, stock: editedStock }
        : item
    );
    saveToStorage(updated);
    setEditingId(null);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <h2>💊 Medicine List</h2>

        <input
          className="form-control my-3"
          placeholder="Search medicine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Added Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>
                  {editingId === item.id ? (
                    <input
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>

                <td>
                  {editingId === item.id ? (
                    <input
                      value={editedStock}
                      onChange={(e) => setEditedStock(e.target.value)}
                    />
                  ) : (
                    item.stock
                  )}
                </td>

                <td>{item.createdAt}</td>

                <td>
                  {editingId === item.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className="btn btn-outline-primary btn-sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default checkAuth(MedicineList);
