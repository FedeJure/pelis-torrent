import React from 'react';
import SelectSearch, { useSelect } from 'react-select-search';
import './SearchBar.css';

const SearchBar = () => {

    return (
        <SelectSearch
            options={[]}
            getOptions={(query) => {
                return new Promise((resolve, reject) => {
                    fetch(`http://www.omdbapi.com/?s=${query}&apikey=2e349fc0`)
                        .then(response => response.json())
                        .then(({Search}) => {
                            resolve(Search.map(({ Title, imdbID }) => ({ value: Title, name: Title })))
                        })
                        .catch(reject);
                });
            }}
            search
            placeholder="Your favorite drink"
        />
    );
}

export default SearchBar;