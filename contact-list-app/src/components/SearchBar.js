import React from 'react'

const SearchBar = (props) =>{
    return (
        <div id = 'search-container'>
            <div id = 'search-bar'>
                <div id = 'search-by-name'>Search By Name: </div>
                <input id = 'input'></input>
                <button onClick = {props.handleClick}>Enter</button>
            </div>
            <div id = 'search-results'></div>
        </div>
    )
}
export default SearchBar 