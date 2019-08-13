import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(img => {
        return <img src={img.urls.small} />
    });

    return <div>{images}</div>
}

export default ImageList;