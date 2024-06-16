import React from 'react';

const Arrow = (props) => {
    return (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className={"arrow"} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.29289 13.7071C0.68342 14.0976 1.31658 14.0976 1.70711 13.7071L7.7071 7.70711C8.0976 7.31658 8.0976 6.68342 7.7071 6.29289L1.70711 0.292891C1.31658 -0.0976309 0.68342 -0.0976299 0.29289 0.292891C-0.09763 0.683421 -0.09763 1.31658 0.29289 1.70711L5.5858 7L0.29289 12.2929C-0.09763 12.6834 -0.09763 13.3166 0.29289 13.7071Z"
            />
        </svg>
    );
};

export default Arrow;