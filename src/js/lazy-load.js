const lazyLoad = {
	images: document.querySelectorAll('.js-lazy-load'),

	init: function() {
		this.lazyLoadImages();
	},

	lazyLoadImages: function() {
		this.images.forEach(image => {
			const backgroundImageUrl = image.style.backgroundImage.replace(/url\(['"]?([^'"]*)['"]?\)/, '$1');

			image.removeAttribute('style');
			image.setAttribute('data-src', backgroundImageUrl);
		})

		function loadImage(image) {
			const imageUrl = image.getAttribute('data-src');
			if (imageUrl) {
				const img = new Image();
				img.src = imageUrl;
				img.onload = () => {
					image.style.backgroundImage = `url(${imageUrl})`;
				}
			}
		}

		window.addEventListener('scroll', () => {
			this.images.forEach(image => {
				const rect = image.getBoundingClientRect();
				if (rect.top < window.innerHeight) {
					loadImage(image);
				}
			})
		})
	}
}

export default lazyLoad;