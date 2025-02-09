import { createTheme } from '@mui/material';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: '500',
});

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#027DFC', // Change primary color
    },
    secondary: {
      main: '#f50057', // Change secondary color
    },
  },
  typography: workSans.style,
});
