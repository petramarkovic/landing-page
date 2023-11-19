import Lenis from '@studio-freight/lenis';
import lazyLoad from './lazy-load.js';
import header from './header.js';
import counter from './counter.js';

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

			lazyLoad.init();
			header.init();
			counter.init();
		});

	}
};

export default init;
