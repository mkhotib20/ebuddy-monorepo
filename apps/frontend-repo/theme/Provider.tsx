'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@mui/material';

import { appTheme } from './config';

const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
