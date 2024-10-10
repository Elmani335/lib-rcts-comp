import React from 'react';
import './table.css';

type TableCell = {
  content: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
};

type TableProps = {
  rows: number;
  columns: number;
  data?: Record<string, TableCell>;
  columnNames?: string[];
  rowNames?: string[];
  borderColor?: string;
  borderWidth?: string;
};

const CustomTable: React.FC<TableProps> = ({
  rows,
  columns,
  data = {},
  columnNames = [],
  rowNames = [],
  borderColor = 'black',
  borderWidth = '1px',
}) => {
  return (
    <div className="table-container">
      <table className="custom-table" style={{ borderColor, borderWidth }}>
        <thead>
          <tr>
            {rowNames.length > 0 && <th></th>}
            {Array.from({ length: columns }).map((_, colIndex) => (
              <th key={colIndex} style={{ borderColor, borderWidth }}>
                {columnNames[colIndex] || `Column ${colIndex + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {rowNames.length > 0 && (
                <td style={{ borderColor, borderWidth }}>
                  {rowNames[rowIndex] || `Row ${rowIndex + 1}`}
                </td>
              )}
              {Array.from({ length: columns }).map((_, colIndex) => {
                const cellKey = `${rowIndex}-${colIndex}`;
                const cellData = data[cellKey] || {};
                return (
                  <td
                    key={colIndex}
                    style={{
                      color: cellData.color,
                      backgroundColor: cellData.backgroundColor,
                      borderColor: cellData.borderColor || borderColor,
                      borderWidth,
                    }}
                  >
                    {cellData.content || ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;