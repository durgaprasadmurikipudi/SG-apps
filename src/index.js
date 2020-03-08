import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './client-side-authentication/components/App';
import Welcome from './client-side-authentication/components/Welcome';
import Signup from './client-side-authentication/components/Signup';
import Signin from './client-side-authentication/components/Signin';
import Signout from './client-side-authentication/components/Signout';
import Feature from './client-side-authentication/components/Feature';
import './index.css';
import reducers from './client-side-authentication/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const token = localStorage.getItem('token');
const store = createStore(reducers, { auth: { authenticated: token }}, composeEnhancers(applyMiddleware(thunk)));

export default class Index extends React.Component {
    
    render() {    
        return (
            <Provider store={store}>                
                <BrowserRouter>
                    <App>
                        <Route path="/" exact component={Welcome} />
                        <Route path="/signUp" exact component={Signup} />
                        <Route path="/signOut" exact component={Signout} />
                        <Route path="/signIn" exact component={Signin} />
                        <Route path="/feature" exact component={Feature} />
                    </App>
                </BrowserRouter>               
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));