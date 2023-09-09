import React from 'react'

const OptimizedImage = ({ src, alt, classNames, style }) => {
    const imageStyles = {
        ...style,
    };

    return (
        <img src={src} loading='lazy' alt={alt} className={classNames} style={imageStyles} />
    )
}

export default OptimizedImage