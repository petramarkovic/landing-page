import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animation from './animation.js';
import header from './header.js';
import scroll from './scroll.js';
import lazyLoad from './lazy-load.js';

const init = {
	init: function() {
		const html = document.querySelector('html');
	
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(() => {
				html.classList.add('loaded');
			}, 10);

			const lenis = new Lenis()

			function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
			}

			requestAnimationFrame(raf)

			lenis.on('scroll', ScrollTrigger.update)

			gsap.ticker.add((time)=>{
			lenis.raf(time * 1000)
			})

			gsap.ticker.lagSmoothing(0)

			animation.init();
			header.init();
			scroll.init();
			lazyLoad.init();
		});

	}
};

export default init;
