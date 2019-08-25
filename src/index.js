import React from 'react';
import ReactDOM from 'react-dom';
import App from './blog-app/Components/App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/blog-app/reducers'

class Index extends React.Component {
    
    render() {    
        return (
            <div>
                <Provider store={createStore(reducers)}>
                    <App />
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));