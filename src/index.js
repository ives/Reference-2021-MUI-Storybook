import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { getMyTheme } from './styles/myTheme';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = getMyTheme();

ReactDOM.render(
  <React.StrictMode>
    <MaterialThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </SCThemeProvider>
    </MaterialThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
