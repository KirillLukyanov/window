const tabs = (tabHeaderSelector, tabSelector, tabContentSelector, activeClass) => {
    const header = document.querySelector(tabHeaderSelector),
          tab = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(tabContentSelector);

    function hideTabContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass.replace(/\./g, ''));
        });
        
        tabContent.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabContent(index = 0) {
        tab[index].classList.add(activeClass.replace(/\./g, ''));
        tabContent[index].style.display = 'block';

        header.addEventListener('click', (event) => {
            const target =  event.target;
            tab.forEach((item, i) => {
                if (target && (target == item || target.parentNode == item)) {
                    hideTabContent();
                    tab[i].classList.add(activeClass);
                    tabContent[i].style.display = 'block';
                }
            });
        });
    }
    hideTabContent();
    showTabContent();
};

export default tabs;