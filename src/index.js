import React from 'react';
import ReactDOM from 'react-dom';
import App from './twitch/Components/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './twitch/reducers';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


export default class Index extends React.Component {
    
    render() {    
        return (
            <Provider store={store}>                
                <App />                
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));