import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

const slider = {
    slider: document.querySelector('.js-swiper'),

    init: function() {
        const swiper = new Swiper(this.slider, {
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 1.5
                },
                992: {
                    slidesPerView: 2.8
                }
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            modules: [Pagination]
        });
    }
}

export default slider;