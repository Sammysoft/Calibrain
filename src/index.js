import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './rootreducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import { userLoggedIn } from './actions/auth';


const store = createStore(
  rootReducer,
composeWithDevTools(applyMiddleware(thunk))
)

if(localStorage.calibrainJWT){
  const user ={ accesstoken: localStorage.calibrainJWT}
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <Router>
        <Provider store={store}>
            <App />
        </Provider>
  </Router>,
  document.getElementById('root')
);
