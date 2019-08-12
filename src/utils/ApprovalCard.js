import React from 'react';

const ApprovalCardCustom = (props) => {
    return (
        <div className="ui cards bottom-left-screen">
            <div className="card">
                <div className="content">{props.content}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={props.approveHandler}>{props.approveText}</div>
                        <div className="ui basic red button" onClick={props.rejectHandler}>{props.rejctText}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCardCustom;