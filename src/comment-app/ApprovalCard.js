import React from 'react';

const ApprovalCard = props => {
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="basic green button">Approve</div>
                    <div className="basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;