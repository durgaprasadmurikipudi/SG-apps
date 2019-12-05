import React from 'react';
import ReactDOM from 'react-dom';
import App from './twitch/Components/App';
import './index.css';
/* import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk' */


export default class Index extends React.Component {
    
    render() {    
        return (
            <div>
                
                    <App />
                
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));