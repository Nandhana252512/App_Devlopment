import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance reporting
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../node_modules/font-awesome/css/font-awesome.min.css'; // Font Awesome CSS
import { BrowserRouter } from 'react-router-dom'; // React Router for navigation
import store from './redux/store'; // Redux store
import { Provider } from 'react-redux'; // Redux Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
