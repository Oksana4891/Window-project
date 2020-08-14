
function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const triggers = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        modals=document.querySelectorAll('.popup');

    triggers.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllModals ();
            handelOpenModal();
        });
    });



    close.addEventListener('click', (e) => {
            modal.classList.add('fadeOut');
            handelCloseModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget && closeClickOverlay) {
            modal.classList.add('fadeOut');
            handelCloseModal(modal);
        }
    });

    function hideAllModals () {
        modals.forEach(item => {
            handelCloseModal(item);
        });
    }

    function handelOpenModal() {
        document.body.style.overflow = "hidden";
        modal.classList.add('is-open');
        modal.classList.remove('fadeOut');
        modal.classList.add('faded');
    }

    function handelCloseModal(modal) {
        document.body.style.overflow = "";
        modal.classList.remove('is-open');
        modal.classList.remove('faded');
    }
}

bindModal(".js_contactUs", ".js_popup-call", ".js_popup-call--close");
bindModal(".js_callEngineer", ".js_popup-engineer", ".js_popup-engineer_close");
bindModal(".glazing_price_btn", ".js-popup_calc", ".js-popup_calc-close");
bindModal(".js-popup_calc-next", ".js-popup_calc--second", ".js-popup_calc-close--second", false);
bindModal(".js-popup_calc-next--second", ".js-popup_calc--end", ".js-popup_calc-close--end", false);

