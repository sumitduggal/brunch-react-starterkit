import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal, css } from 'styled-components';

import theme from 'styles/themes';
import globals from 'styles/globals';
import App from './App';

injectGlobal`${globals}`;
const Themed_App = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  ReactDOM.render(<Themed_App />, document.getElementById('app'));
  console.log('Initialized app')
});
