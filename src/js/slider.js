// -------------SLIDER------------


function slides(sliderItemSelector, sliderListSelector, selectorPrev, selectorNext) {

    const buttonNext = document.querySelector(selectorNext);
    const buttonPrev = document.querySelector(selectorPrev);
    const sliderItem = document.querySelectorAll(sliderItemSelector);
    const sliderList = document.querySelector(sliderListSelector);
    let sliderIndex = 1;
    let translateX;

    buttonNext.addEventListener('click', () => {
        moveSliderNext();
    });

    buttonPrev.addEventListener('click', () => {
        moveSliderPrev();
    });


    function moveSliderNext() {
        event.preventDefault();

        if (sliderIndex == sliderItem.length) {
            sliderIndex = 1;
            sliderList.style.transform = 'translateX(-0%)';
        } else {
            translateX = sliderItem[sliderIndex].clientWidth;
            sliderList.style.transform =
                'translateX(-' + translateX * sliderIndex + 'px)';
            sliderIndex += 1;
        }
    }

    function moveSliderPrev() {
        event.preventDefault();
        sliderIndex -= 1;
        if (sliderIndex <= 0) {
            translateX = sliderItem[sliderIndex].clientWidth;
            sliderIndex = sliderItem.length;
            sliderList.style.transform =
                'translateX(-' + (translateX * sliderIndex - translateX) + 'px)';
        } else {
            translateX = sliderItem[sliderIndex].clientWidth;
            sliderList.style.transform =
                'translateX(-' + (translateX * sliderIndex - translateX) + 'px)';
        }
    }
}