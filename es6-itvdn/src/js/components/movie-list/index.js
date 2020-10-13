import movie from '../movie';

export default class MovieList {
    init(data) {
        this.data = data;
    }

    drawToDom(selector){
        this.selector = selector;
        this.clearList(selector);
        selector.appendChild(this.fragment);
    }

    renderMovies(data){
        this.fragment = document.createDocumentFragment();

        data.forEach(data => {
            const article = document.createElement('article');

            article.classList.add('movie');
            article.innerHTML = movie(data);
            this.fragment.appendChild(article);
        });
    }

    clearList(selector) {
        selector.innerHTML = '';
    }

    sort(filter) {
        const data = [...this.data.results];

        if (filter === 'rating-max') {
            this.sortByMaxRating(data);
        }
        
        if (filter === 'rating-min') {
            this.sortByMinRating(data);

        }

        if (filter === 'rating-new') {
            this.sortByNew(data);
            
        }

        if (filter === 'rating-old') {
            this.sortByOld(data);
            
        }
    }

    sortByMaxRating(data) {
        data.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return 1;
            }

            if (a.popularity > b.popularity) {
                return -1;
            }
        });

        this.renderMovies(data);
        this.drawToDom(document.querySelector('.movies'))

    }

    sortByMinRating(data) {
        data.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return 1;
            }

            if (a.popularity < b.popularity) {
                return -1;
            }
        });
        
        this.renderMovies(data);
        this.drawToDom(document.querySelector('.movies'))
    }

    sortByNew(data) {
        data.sort((a, b) => {
            if (new Date(a.first_air_date) < new Date(b.first_air_date)) {
                return 1;
            }

            if (new Date(a.first_air_date) > new Date(b.first_air_date)) {
                return -1;
            }
        });

        this.renderMovies(data);
        this.drawToDom(document.querySelector('.movies'))
    }

    sortByOld(data) {
        data.sort((a, b) => {
            if (new Date(a.first_air_date) > new Date(b.first_air_date)) {
                return 1;
            }

            if (new Date(a.first_air_date) < new Date(b.first_air_date)) {
                return -1;
            }
        });

        this.renderMovies(data);
        this.drawToDom(document.querySelector('.movies'))
    }

    hide() {
        this.selector.style.display = 'none'
    }
}
