import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './Redux-Toolkit/Store.js';



// step 9 and 10 is to import provider from redux and store from Store.js to pass iside provide as below
// we created store in store.JS where we import reducers from cart.js to pass reducer inside store and we import that store here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store} >
      <App />
    </Provider>

  </React.StrictMode>,
)
