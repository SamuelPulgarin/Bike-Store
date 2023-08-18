import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App/>
      <SignIn/>
      <SignUp/>
    </Provider>
  </React.StrictMode>,
)
