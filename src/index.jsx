import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import App from './App/App';
import store from './App/store';
import { theme } from './Constants/theme';
import './index.scss';
import reportWebVitals from './reportWebVitals';

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
