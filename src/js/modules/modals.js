const modals = () => {

    function openModal (triggerSelector, modalSelector) {
        document.querySelector(triggerSelector).addEventListener('click', () => {
            document.querySelector(modalSelector).style.display = 'flex';
        });
    }


    openModal('.popup_engineer_btn', '.popup_engineer');

};

export default modals;