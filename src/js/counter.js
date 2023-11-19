import { CountUp } from "countup.js";

const counter = {
    counters: document.querySelectorAll('.js-num'),

    init: function() {
        this.countUp();
    },

    countUp: function() {
        this.counters.forEach(el => {
            const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const countUp = new CountUp(el, el.innerHTML);
                        if (!countUp.error) {
                        countUp.start();
                        } else {
                        console.error(countUp.error);
                        }
					} else {
						return;
					}
				});
			}, {
				threshold: 0.2
			});
			observer.observe(el);
        })
    }
}

export default counter;