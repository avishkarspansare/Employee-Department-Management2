import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import theme from './theme';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import EmployeeForm from './components/EmployeeForm';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import DepartmentComponent from './components/DepartmentComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
          <HeaderComponents />
          <Box component="main" sx={{ flex: 1, py: 4 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/employees" replace />} />
              <Route path="/employees" element={<ListEmployeeComponents />} />
              <Route path="/add-employee" element={<EmployeeForm />} />
              <Route path="/update-employee/:id" element={<EmployeeForm />} />
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
              <Route path="/departments" element={<DepartmentComponent />} />
            </Routes>
          </Box>
          <FooterComponents />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
