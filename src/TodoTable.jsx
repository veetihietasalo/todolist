import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TodoTable = ({ todos, deleteTodo }) => {
  const columnDefs = [
    { headerName: "Description", field: "description", filter: true, floatingFilter: true },
    { headerName: "Date", field: "date", filter: true, floatingFilter: true },
    { headerName: "Actions", field: "actions", cellRendererFramework: params => <button onClick={() => deleteTodo(params.rowIndex)}>Delete</button> }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={todos}
        animateRows={true}
      />
    </div>
  );
};

export default TodoTable;
