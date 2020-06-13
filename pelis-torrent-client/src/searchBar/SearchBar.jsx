import React from 'react';
import SelectSearch from 'react-select-search';
import './SearchBar.css';

const SearchBar = ({onChange}) => {
    var values = {};
    return (
        <SelectSearch
        options={[]}
            getOptions={(query) => {
                return new Promise((resolve, reject) => {
                    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${query}&sort_by=name`)
                        .then(response => response.json())
                        .then(({data}) => {
                            values = {};
                            const movie = data.movies.map(({ title,
                                                            rating,
                                                            year,
                                                            medium_cover_image,
                                                            large_cover_image,
                                                            torrents }) =>  {
                                values[title] = {title, image: large_cover_image, torrents};
                                return { 
                                    value: title,
                                    date: year,
                                    vote: rating,
                                    image: medium_cover_image,
                                    name: title };

                            });

                            resolve(movie)
                        })
                        .catch(reject);
                });
            }}
            search
            placeholder="Torrent to search"
            onChange={value => onChange(values[value])}
            printOptions="on-focus"
            renderOption={(props, data, snapshot, className) =>
            <button id={data.name} {...props} className={`${className} search-item`} type="button" >
                <div>
                    <img src={data.image ? `${data.image}` : "./missing-file.png"}/>
                </div>
                <div className="search-item-description-container">
                    <a>{data.name}</a>
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