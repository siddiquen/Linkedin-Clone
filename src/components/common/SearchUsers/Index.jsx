import React from 'react';
import './index.scss';
import {
    AiOutlineCloseCircle} from 'react-icons/ai';

export default function SearchUsers({ setIsSearch, setSearchInput}) {
    return (
        <div className='SearchUsers'>
            <input placeholder='Search Users' onChange={(event) => setSearchInput(event.target.value)}/>
            <AiOutlineCloseCircle className="close" size={20} onClick={() => {
                setIsSearch(false);
                setSearchInput("");
            }}/>
        </div>
    )
}