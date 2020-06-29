import React from 'react';

const Project = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Technologies used: {props.tech}</p>
        </div>
    );
}

export default Project