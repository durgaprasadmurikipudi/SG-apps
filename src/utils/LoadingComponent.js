import React from 'react';

const LoadingComponent = (props) => {
    return (
        <div className="ui dimmer active">
            <div className="ui big text loader">{props.text}</div>
        </div>
    );
}

export default LoadingComponent;