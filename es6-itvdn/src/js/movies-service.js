import config from './config';

function getVideoByText(text){
    if (!text) {
        return;
    }

    return fetch(config.searchMovieUrl + text) 
        .then(r => r.json());
}

function getVideoById(id) {
    const url = `${config.baseMovieUrl}${config.queryMovieId}${id}${config.apiKey}`;

    return fetch(url)
        .then (r => r.json());
}

export default {
    getVideoByText,
    getVideoById
}
