function Pagination({ total, perPage, currentPage, setCurrentPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div>
      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
