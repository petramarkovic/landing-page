const header = {
    body: document.body,
    nav: document.querySelector('.js-nav'),
    navBtn: document.querySelector('.js-nav-btn'),
    navActiveClass: 'nav--active',
    scrollDisabledClass: 'scroll-disabled',

    init: function() {
        this.navigationHandler();
    },

    navigationHandler: function() {
        this.navBtn.addEventListener('click', () => {
            if (this.nav.classList.contains(this.navActiveClass)) {
                this.nav.classList.remove(this.navActiveClass);
                this.body.classList.remove(this.scrollDisabledClass);
            } else {
                this.nav.classList.add(this.navActiveClass);
                this.body.classList.add(this.scrollDisabledClass);
            }
        })
    }
}

export default header;