import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
