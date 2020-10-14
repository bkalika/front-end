import config from '../../config';

const listWrapper = document.querySelector('.list-wrapper');
const movieWrapper = document.querySelector('.movie-wrapper');

function renderMovie(data) {
    const mapingData = mapData(data);
    
    const html = `
            <a class="back">Back</a>
            <a href='${data.id}' class="movie-link">
                <div class="id">${mapingData.id}</div>
                <h2 class="movie-title">${mapingData.title}</h2>
                <date class="date">${mapingData.date}</date>
                <div class="country">${mapingData.country}</div>
                <div class="picture"><img src='${mapingData.img}'></div>
                <div class="language">${mapingData.language}</div>
                <div class="overview">${mapingData.overview}</div>
                <div class="popylarity">${mapingData.popularity}</div>
                <div class="vote">${mapingData.vote_average}</div>
                <div class="original-language>${mapingData.original_name}</div>
            </a>
    `;

    render(html);
}

function mapData(data) {
    const defaultValue = 'Unknown';

    return {
        id: data.id || Date.now(),
        title: data.title || data.name || defaultValue,
        date: data.release_date || data.first_air_date || defaultValue,
        coutnry: data.origin_country || defaultValue,
        img: getPictureUrl(),
        language: data.original_language || defaultValue,
        overview: data.overview,
        popularity: data.popularity,
        vote_average: data.vote_average,
        original_name: data.original_name
    }

    function getPictureUrl() {
        const url = data.backgroung_path || data.poster_path;

        if (url) {
            return config.imageSrc + url;
        } else {
            return config.noImageSrc;
        }
    }
}

function render(html){
    const element = document.createElement('article');

    article.classList.add('movie');
    element.innerHTML = html;
    movieWrapper.style.display = 'block';
    listWrapper.getElementsByClassName.display = 'none';
    movieWrapper.innerHTML = '';
    movieWrapper.appendChild(element)

    const backButton = document.querySelector('.back');
    backButton.addEventListener('click', back);
}

function back() {
    listWrapper.style.display = 'block';
    movieWrapper.style.display = 'none';
}

export default {
    renderMovie,
    back
}
