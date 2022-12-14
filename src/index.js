import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchRobots, requestRobots } from './reducer'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const logger = createLogger();

const rootReducers = combineReducers({searchRobots, requestRobots});
const store = legacy_createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provider - to not pass down the store props all the way down the component tree */}
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
