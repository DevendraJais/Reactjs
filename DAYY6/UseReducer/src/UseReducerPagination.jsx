import React, { useReducer, useState } from 'react';

const UseReducerPagination = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const handleAPIResponse = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "PENDING":
        return { ...state, loading: true };

      case "FULLFILL":
        return {
          ...state,
          loading: false,
          data: payload,
          filteredData: payload
        };

      case "FILTER":
        const filtered = state.data.filter(item =>
          item.title.toLowerCase().includes(payload.toLowerCase())
        );
        return { ...state, filteredData: filtered };

      case "REJECT":
        return { ...state, loading: false, error: action.error };

      default:
        return state;
    }
  };

  const initialState = {
    loading: false,
    data: [],
    filteredData: [],
    error: ""
  };

  const [APIState, dispatch] = useReducer(handleAPIResponse, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔽 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchAPI = async () => {
    dispatch({ type: "PENDING" });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "FULLFILL", payload: data });
    } catch (error) {
      dispatch({ type: "REJECT", error: "API fetch failed" });
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
    dispatch({ type: "FILTER", payload: value });
  };

  // 🔽 Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = APIState.filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(APIState.filteredData.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Post Search with Pagination</h2>
      <button onClick={fetchAPI}>Fetch API</button>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "8px",
          width: "300px",
          margin: "20px 0",
          border: "1px solid #000"
        }}
      />

      {APIState.loading && <h2>Loading...</h2>}
      {APIState.error && <h2 style={{ color: "red" }}>{APIState.error}</h2>}

      {currentItems.map((item) => (
        <li key={item.id} style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          listStyleType: "none"
        }}>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </li>
      ))}

      {/* 🔽 Pagination Controls */}
      {APIState.filteredData.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              style={{
                margin: "0 5px",
                fontWeight: currentPage === index + 1 ? "bold" : "normal"
              }}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UseReducerPagination;
