// ------TAB--------//

function tab(headerTabs, tabSelector, contentSelector, classActive) {
    const tabsList = document.querySelector(headerTabs),
        tabLink = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('faded');
        });
        tabLink.forEach(item => {
            item.classList.remove(classActive.replace(/\./, ""));
        });

    }

    function showTabContent(i = 0) {
        content[i].classList.remove('hide');
        content[i].classList.add("faded");
        tabLink[i].classList.add(classActive.replace(/\./, ""));
    }

    hideTabContent();
    showTabContent();

    tabsList.addEventListener("click", handelChangeTab);

    function handelChangeTab(event) {
        event.preventDefault();

        if (event.target.classList.contains(tabSelector.replace(/\./, "")) ||
            event.target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tabLink.forEach((item, i) => {

                if (event.target == item || event.target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

        else { return; }
    }
}

tab(".glazing_tabs--menu", ".glazing_tabs--item", ".glazing_tabs--content", ".active");
tab(".decoration_tabs--menu", ".decoration_tabs--item", ".decoration_tabs--content", ".active");
tab(".popup_tabs--menu", ".popup_tabs--item", ".popup_tabs--content", ".active");
