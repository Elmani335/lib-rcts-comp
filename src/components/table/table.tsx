import React, { useState } from 'react';
import './table.css';

type TableCell = {
  content: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  fontFamily?: string;
  fontSize?: string;
};

type TableProps = {
  rows: number;
  columns: number;
  data?: Record<string, TableCell>;
  columnNames?: string[];
  rowNames?: string[];
  borderColor?: string;
  borderWidth?: string;
  enableSorting?: boolean;
  enablePagination?: boolean;
  rowsPerPage?: number;
  enableSelection?: boolean;
};

const CustomTable: React.FC<TableProps> = ({
  rows,
  columns,
  data = {},
  columnNames = [],
  rowNames = [],
  borderColor = 'black',
  borderWidth = '1px',
  enableSorting = false,
  enablePagination = false,
  rowsPerPage = 5,
  enableSelection = false,
}) => {
  const [sortConfig, setSortConfig] = useState<{ column: number; direction: 'asc' | 'desc' | 'none' } | null>(null);
  const [selectedCells, setSelectedCells] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(0);

  const handleSort = (columnIndex: number) => {
    if (!enableSorting) return;
    let direction: 'asc' | 'desc' | 'none' = 'asc';
    if (sortConfig && sortConfig.column === columnIndex) {
      direction = sortConfig.direction === 'asc' ? 'desc' : sortConfig.direction === 'desc' ? 'none' : 'asc';
    }
    setSortConfig(direction === 'none' ? null : { column: columnIndex, direction });
  };

  const handleSelection = (cellKey: string, shiftKey: boolean) => {
    if (!enableSelection) return;
    setSelectedCells((prevSelected) => {
      const newSelectedCells = shiftKey ? { ...prevSelected } : {};
      newSelectedCells[cellKey] = !prevSelected[cellKey];
      return newSelectedCells;
    });
  };

  const handleRowSelection = (rowIndex: number) => {
    if (!enableSelection) return;
    const newSelectedCells = { ...selectedCells };
    for (let i = 0; i < columns; i++) {
      const cellKey = `${rowIndex}-${i}`;
      newSelectedCells[cellKey] = !selectedCells[cellKey];
    }
    setSelectedCells(newSelectedCells);
  };

  const handleColumnSelection = (colIndex: number) => {
    if (!enableSelection) return;
    const newSelectedCells = { ...selectedCells };
    for (let i = 0; i < rows; i++) {
      const cellKey = `${i}-${colIndex}`;
      newSelectedCells[cellKey] = !selectedCells[cellKey];
    }
    setSelectedCells(newSelectedCells);
  };

  const handleResetSelectionAndSort = () => {
    setSelectedCells({});
    setSortConfig(null);
  };

  const sortedData = [...Array(rows).keys()].map((rowIndex) => {
    return Array.from({ length: columns }).map((_, colIndex) => {
      const cellKey = `${rowIndex}-${colIndex}`;
      return { key: cellKey, ...data[cellKey] };
    });
  });

  if (sortConfig && sortConfig.direction !== 'none') {
    sortedData.sort((a, b) => {
      const valA = a[sortConfig.column]?.content;
      const valB = b[sortConfig.column]?.content;
      if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const paginatedRows = sortedData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div className="table-container">
      <table className="custom-table" style={{ borderColor, borderWidth }}>
        <thead>
          <tr>
            {rowNames.length > 0 && (
              <th
                onClick={() => handleResetSelectionAndSort()}
                style={{ cursor: 'pointer' }}
              ></th>
            )}
            {Array.from({ length: columns }).map((_, colIndex) => (
              <th
                key={colIndex}
                style={{ borderColor, borderWidth }}
                onClick={(e) => {
                  if (e.shiftKey) {
                    handleColumnSelection(colIndex);
                  } else {
                    handleSort(colIndex);
                  }
                }}
              >
                {columnNames[colIndex] || `Column ${colIndex + 1}`}
                {enableSorting && sortConfig?.column === colIndex &&
                  (sortConfig.direction === 'asc' ? ' ▲' : sortConfig.direction === 'desc' ? ' ▼' : '')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {rowNames.length > 0 && (
                <td
                  className="row-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowSelection(rowIndex + currentPage * rowsPerPage);
                  }}
                >
                  {rowNames[rowIndex + currentPage * rowsPerPage] || `Row ${rowIndex + 1}`}
                </td>
              )}
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={(e) => handleSelection(cell.key, e.shiftKey)}
                  className={selectedCells[cell.key] ? 'selected-cell' : ''}
                  style={{
                    color: cell.color,
                    backgroundColor: cell.backgroundColor,
                    borderColor: cell.borderColor || borderColor,
                    borderWidth: cell.borderWidth || borderWidth,
                    borderRadius: cell.borderRadius,
                    fontFamily: cell.fontFamily,
                    fontSize: cell.fontSize,
                    cursor: enableSelection ? 'pointer' : 'default',
                    outline: selectedCells[cell.key] ? '2px solid #007bff' : 'none',
                  }}
                >
                  {cell.content || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {enablePagination && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>Page {currentPage + 1}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={(currentPage + 1) * rowsPerPage >= rows}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomTable;