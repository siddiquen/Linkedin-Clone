import React from 'react';
import './index.scss';

export default function Button({title, onClick}) {
    return (
        <button className='commonBtn' onClick={onClick}>{title}</button>
    );
}