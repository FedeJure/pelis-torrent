import React from 'react';
import SelectSearch from 'react-select-search';
import './SearchBar.css';

const SearchBar = ({onChange}) => {
    return (
        <SelectSearch
            getOptions={(query) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://api.themoviedb.org/3/search/movie?api_key=133f4d8b4fed128b27fa0bb407956c56&language=en-US&page=1&include_adult=false&query=${query}`)
                        .then(response => response.json())
                        .then(({results}) => {
                            resolve(results.map(({ title }) => ({ value: title, name: title })))
                        })
                        .catch(reject);
                });
            }}
            search
            placeholder="Torrent to search"
            onChange={onChange}
        />
    );
}

export default SearchBar;