import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" />
          <Tab label="TodoList" />
        </Tabs>
      </Box>
      {value === 0 && <h1>Welcome to my App!</h1>}
      {value === 1 && <TodoList />}
    </div>
  );
}

export default App;
