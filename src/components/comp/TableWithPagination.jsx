import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableWithPagination = ({ title, data, columns, loading   }) => {
  const navigate = useNavigate();
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // Calculate the indices for slicing data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg bor h100">
      <h1 className="text-2xl font-bold mb-3 text-center text-gray-700">
        {title && title}
      </h1>
      {
        loading?<div>Loading...</div>:<></>
      }
      <table className={`${loading?"hidden":""} min-w-full border-collapse border border-gray-300 shadow-sm rounded-lg`}>
        <thead className="bg-red-500 text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="py-2 px-6 border-b text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 even:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="py-2 px-6 border-b bor">
                  {row[col.key] == "assign authority" ? <div>gg</div>:""}
                  
                  
                  {col.key == "image"?<div className="w-[100px] bor">
                    <img src={row.imageUrl} className="w100 bor rounded shadow-black"/>
                    
                  </div>:""}
                  
                  {row[col.key] == "Detail" ? (
                    <span
                      className="bor cursor-pointer"
                      onClick={() => navigate(`${row.link}/` + row.id)}
                    >
                      {row[col.key]}
                    </span>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      
      <div className={`${loading?"none":""} flex justify-center items-center mt-6 space-x-2 bor  `}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50 hover:bg-blue-600`}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50 hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableWithPagination;
