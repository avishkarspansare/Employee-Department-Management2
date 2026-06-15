import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  shape: {
    borderRadius: 0,   // hard edges everywhere — no curves at all
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A0F',
      paper:   '#111118',
    },
    primary: {
      main:         '#00D4FF',
      contrastText: '#0A0A0F',
    },
    secondary: {
      main: '#FF3B6B',
    },
    error: {
      main: '#FF3B6B',
    },
    success: {
      main: '#00E5A0',
    },
    text: {
      primary:   '#F0F0F0',
      secondary: '#6B7280',
    },
    divider: '#1C1C28',
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
    h4: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h6: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontWeight: 600,
      letterSpacing: '0px',
    },
    overline: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: '0.65rem',
      letterSpacing: '2px',
    },
    button: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontWeight: 600,
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      fontSize: '0.72rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600;700&display=swap');* { box-sizing: border-box; }body { margin: 0; background: #0A0A0F; }::-webkit-scrollbar { width: 4px; }::-webkit-scrollbar-track { background: #0A0A0F; }::-webkit-scrollbar-thumb { background: #1C1C28; }`,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '6px 16px',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          background: '#00D4FF',
          color: '#0A0A0F',
          '&:hover': { background: '#00B8E0' },
        },
        outlinedPrimary: {
          borderColor: '#00D4FF',
          color: '#00D4FF',
          '&:hover': { background: 'rgba(0,212,255,0.08)', borderColor: '#00D4FF' },
        },
        outlinedError: {
          borderColor: '#FF3B6B',
          color: '#FF3B6B',
          '&:hover': { background: 'rgba(255,59,107,0.08)' },
        },
        outlinedSuccess: {
          borderColor: '#00E5A0',
          color: '#00E5A0',
          '&:hover': { background: 'rgba(0,229,160,0.08)' },
        },
        outlinedSecondary: {
          borderColor: '#2A2A3A',
          color: '#6B7280',
          '&:hover': { background: 'rgba(255,255,255,0.04)', borderColor: '#3A3A4A' },
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', size: 'small' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            background: '#0D0D15',
            fontFamily: '"Inter", sans-serif',
            '& fieldset': { borderColor: '#1C1C28' },
            '&:hover fieldset': { borderColor: '#2C2C3C' },
            '&.Mui-focused fieldset': { borderColor: '#00D4FF', borderWidth: '1px' },
          },
          '& .MuiInputLabel-root': { color: '#6B7280', fontSize: '0.8rem' },
          '& .MuiInputLabel-root.Mui-focused': { color: '#00D4FF' },
          '& .MuiInputBase-input': { color: '#F0F0F0', fontSize: '0.875rem' },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          background: '#0D0D15',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#1C1C28' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#2C2C3C' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00D4FF', borderWidth: '1px' },
          '& .MuiSelect-select': { color: '#F0F0F0', fontSize: '0.875rem' },
        },
        icon: { color: '#6B7280' },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: { background: '#111118', borderRadius: 0, border: '1px solid #1C1C28' },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          color: '#F0F0F0',
          '&:hover': { background: '#1C1C28' },
          '&.Mui-selected': { background: 'rgba(0,212,255,0.1)', color: '#00D4FF' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#111118',
          border: '1px solid #1C1C28',
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none', borderRadius: 0 },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& th': {
            background: '#0D0D15',
            color: '#6B7280',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            borderBottom: '1px solid #1C1C28',
            padding: '12px 16px',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& tr': {
            borderLeft: '2px solid transparent',
            transition: 'border-color 0.15s, background 0.15s',
            '&:hover': {
              background: '#141420',
              borderLeft: '2px solid #00D4FF',
            },
          },
          '& td': {
            borderBottom: '1px solid #1C1C28',
            color: '#D0D0D0',
            fontSize: '0.875rem',
            padding: '10px 16px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: '#1C1C28' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 0, fontSize: '0.72rem', height: '22px' },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 0, fontSize: '0.8rem' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '0.8rem' },
      },
    },
    MuiFormControl: {
      defaultProps: { size: 'small' },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#1C1C28' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#0A0A0F',
          borderBottom: '1px solid #1C1C28',
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: { minHeight: '52px !important', padding: '0 24px !important' },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: { borderRadius: 0, border: '1px solid #1C1C28', background: '#111118' },
        option: {
          fontSize: '0.875rem',
          '&:hover': { background: '#1C1C28 !important' },
        },
      },
    },
  },
});

export default theme;
