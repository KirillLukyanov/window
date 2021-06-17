import modalClose from "./modalClose";

const modals = (state) => {

    function bindModal(triggerSelector, modalSelector, closeModalSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeModal = document.querySelector(closeModalSelector);


        
        
        trigger.forEach(item => {

            const validationMessage = (text) => {
                let message = document.createElement('div');
                    message.classList.add('status');
                    message.textContent = text;
                    item.insertAdjacentElement('beforebegin', message);
                    setTimeout(() => {
                        message.remove();
                    }, 3000);
            };

            item.addEventListener('click', (e) => {
                
                if (e.target) {
                    e.preventDefault();
                }
                if (modalSelector === '.popup_calc_profile' && (!state.width || !state.height)) {
                    validationMessage('Пожалуйста, введите ширину и высоту');

                } else if (modalSelector === '.popup_calc_end' && !state.profile) {
                    validationMessage('Пожалуйста, выберите профиль');
                    
                } else {
                    modalClose();
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${calcScroll()}px`;
                }

                clearTimeout(modalTimer);
            });

        });
        

        closeModal.addEventListener('click', () => {
            modalClose();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                modalClose();
            }
        });
    }

    const modalTimer = setTimeout(function() {
        document.querySelector('.popup[data-modal]').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`;
    }, 3000);

    function calcScroll () {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
    
        document.body.appendChild(div);
    
        let scroll = div.offsetWidth - div.clientWidth;
        div.remove();
        return scroll;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};

export default modals;