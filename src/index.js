import React from 'react';
import ReactDOM from 'react-dom';
import App from './video-app/Components/App';
import './index.css';

class Index extends React.Component {
    

    render() {    
        return (
            <div>
                <App />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));