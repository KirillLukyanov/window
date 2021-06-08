const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeModalSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeModal = document.querySelector(closeModalSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                clearTimeout(modalTimer);
            });
        });
        

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    const modalTimer = setTimeout(function() {
        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
};

export default modals;