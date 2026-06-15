import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function FooterComponents() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid #1C1C28',
        py: 1.5,
        px: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="overline" sx={{ color: '#2A2A3A', fontSize: '0.6rem' }}>
        EMP_MGMT_SYS
      </Typography>
      <Typography variant="overline" sx={{ color: '#2A2A3A', fontSize: '0.6rem' }}>
        © 2025 AVISHKAR PANSARE
      </Typography>
    </Box>
  );
}

export default FooterComponents;
