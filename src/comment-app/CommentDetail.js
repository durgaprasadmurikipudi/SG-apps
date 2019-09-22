import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return (
        
            <div className="comment">
                <a href="/" className="avatar"><img src={faker.image.avatar()} alt="avatar"/></a>
                <div className="content">
                    <a href="/" className="author">{props.name}</a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM!</span>
                    </div>
                    <div clsasName="text">Nice Blog Post!!</div>
                </div>
            </div>
        
    );
}

export default CommentDetail;