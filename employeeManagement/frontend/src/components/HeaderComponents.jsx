import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function HeaderComponents() {
  const { pathname } = useLocation();

  const navBtn = (label, to) => {
    const active = pathname === to || (to === '/employees' && pathname === '/');
    return (
      <Button
        key={to}
        component={Link}
        to={to}
        variant={active ? 'contained' : 'text'}
        size="small"
        sx={{
          ml: 1,
          borderRadius: 0,
          fontSize: '0.7rem',
          letterSpacing: '1.5px',
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 600,
          color: active ? '#0A0A0F' : '#6B7280',
          bgcolor: active ? '#00D4FF' : 'transparent',
          px: 2,
          py: 0.75,
          '&:hover': {
            bgcolor: active ? '#00B8E0' : 'rgba(0,212,255,0.06)',
            color: active ? '#0A0A0F' : '#00D4FF',
          },
        }}
      >
        {label}
      </Button>
    );
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <PeopleAltIcon sx={{ color: '#00D4FF', mr: 1.5, fontSize: 18 }} />
        <Typography
          variant="h6"
          component={Link}
          to="/employees"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '1px',
            color: '#F0F0F0',
            textDecoration: 'none',
            flexGrow: 1,
          }}
        >
          EMP_MGMT
        </Typography>
        <Box>
          {navBtn('EMPLOYEES', '/employees')}
          {navBtn('DEPARTMENTS', '/departments')}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderComponents;
