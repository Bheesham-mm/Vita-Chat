import React from 'react';
import searchIcon from '../assets/images/bx_search.png';

function Search() {
    return (
        <div className='mt-7 rounded-xl h-full pt-3 pb-3 pl-4 pr-5 shadow-lg overflow-hidden bg-white'>
            <div className='flex justify-center items-center gap-4'>
                <img src={searchIcon} className='w-6' alt="" />
                <input placeholder='Search' className='outline-none border-none' type="text" name="search" id="search" />
            </div>
        </div>
    );
}

export default Search;
