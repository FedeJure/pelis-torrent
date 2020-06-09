import React from 'react';
import SelectSearch from 'react-select-search';
import './SearchBar.css';

const SearchBar = ({onChange}) => {
    return (
        <SelectSearch
            getOptions={(query) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://api.themoviedb.org/3/search/movie?`+
                            `api_key=133f4d8b4fed128b27fa0bb407956c56&`+
                            `language=en-US&page=1&include_adult=false&`+
                            `query=${query}`)
                        .then(response => response.json())
                        .then(({results}) => {
                            console.log(results)
                            resolve(results.map(({ title, vote_average, release_date, poster_path }) => ({ 
                                value: title,
                                date: release_date,
                                vote: vote_average,
                                image: poster_path,
                                name: title 
                            })))
                        })
                        .catch(reject);
                });
            }}
            search
            placeholder="Torrent to search"
            onChange={onChange}
            renderOption={(props, data, snapshot, className) =>
            <button {...props} className={`${className} search-item`} type="button" >
                <div>
                    <img src={data.image ? `https://image.tmdb.org/t/p/w500/${data.image}` : "./missing-file.png"}/>
                </div>
                <div className="search-item-description-container">
                    <a>{props.value}</a>
                    <div className="search-item-description">
                        <span>{data.vote}<img className="rating-star" src="./star.png"/></span>
                        
                        <span>{data.date}</span>
                    </div>
                </div>
            </button>}
        />
    );
}

export default SearchBar;