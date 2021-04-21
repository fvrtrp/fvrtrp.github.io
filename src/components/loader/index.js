import React from 'react';
import './loader.scss';
import LoaderImage from './loader.svg';

export default function Loader(props) {
    return (
        <div className="loaderBackground">
            <img src={LoaderImage} alt="loader" className="loaderImage" />
        </div>
    )
}