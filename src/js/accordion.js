const accordion = {
    buttons: document.querySelectorAll('.js-accordion-button'),
    content: document.querySelectorAll('.js-accordion-content'),
    accordionBtnActiveClass: 'accordion__btn--active',

    init: function() {
        this.accordionsHandler();
    },

    accordionsHandler: function() {
        this.buttons.forEach((el) => {
            el.addEventListener('click', (e) => {
                const clicked = e.target;
                const parent = clicked.closest('.js-accordion-item');
                const content = parent.querySelector('.js-accordion-content');

                this.content.forEach(element => element.style.maxHeight = 0);

                if (clicked.classList.contains(this.accordionBtnActiveClass)) {
                    content.style.maxHeight = 0;
                    clicked.classList.remove(this.accordionBtnActiveClass);
                } else {
                    this.buttons.forEach(btn => btn.classList.remove(this.accordionBtnActiveClass))
                    content.style.maxHeight = content.scrollHeight + 'px';
                    clicked.classList.add(this.accordionBtnActiveClass);
                }

            })
        })
    }
}

export default accordion;