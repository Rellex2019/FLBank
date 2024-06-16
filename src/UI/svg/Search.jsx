import React from 'react';

const Search = (props) => {
    return (
        <svg  className={"search_fill"}  width="20" height="21" viewBox="0 0 20 21" fill={props.colo} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.33356 14.9786C4.96458 14.9786 2.22228 12.2375 2.22228 8.86751C2.22228 5.49862 4.96458 2.7564 8.33356 2.7564C11.7037 2.7564 14.4448 5.49862 14.4448 8.86751C14.4448 12.2375 11.7037 14.9786 8.33356 14.9786ZM19.675 18.6375L14.9504 13.9131C16.0227 12.512 16.6671 10.7653 16.6671 8.86862C16.6671 4.27196 12.9292 0.53418 8.33356 0.53418C3.73899 0.53418 0 4.27307 0 8.86751C0 13.4631 3.73899 17.2008 8.33356 17.2008C10.2314 17.2008 11.9781 16.5564 13.3793 15.4842L18.1038 20.2086C18.3216 20.4264 18.605 20.5342 18.8894 20.5342C19.1739 20.5342 19.4583 20.4264 19.675 20.2086C20.1083 19.7753 20.1083 19.072 19.675 18.6375Z"
                 />
        </svg>
    );
};

export default Search;
