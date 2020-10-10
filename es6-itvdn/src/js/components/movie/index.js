import config from '../../config';

export default function movie(data) {
    console.log(data)
    const mapingData = mapData(data);
    
    const html = `
            <div class="id">${mapingData.id}</div>
            <h2 class="movie-title">${mapingData.title}</h2>
            <date class="date">${mapingData.date}</date>
            <div class="country">${mapingData.country}</div>
            <div class="picture"><img src='${mapingData.img}'></div>
            <div class="language">${mapingData.language}</div>
            <div class="overview">${mapingData.overview}</div>
            <div class="popylarity">${mapingData.popularity}</div>
    `;

    return html;
}

function mapData(data) {
    return {
        id: data.id,
        title: data.title || data.name || 'Unknown',
        data: data.original_language,
        coutnry: data.origin_country,
        img: getPictureUrl(),
        language: data.original_language,
        overview: data.overview,
        popularity: data.popularity
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
