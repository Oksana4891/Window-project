// 'use strict';


// // ------BURGER ICON-----------

// const burger = document.querySelector('#burger');
// const burgerMenu = document.querySelector('.js_burger_menu');

// burger.onclick = function () {
//     burger.classList.toggle('burger_active');
//     burgerMenu.classList.toggle('nav_list--active');
// };

// // -------------SLIDER------------


// function slides(sliderItemSelector, sliderListSelector, selectorPrev, selectorNext) {

//     const buttonNext = document.querySelector(selectorNext);
//     const buttonPrev = document.querySelector(selectorPrev);
//     const sliderItem = document.querySelectorAll(sliderItemSelector);
//     const sliderList = document.querySelector(sliderListSelector);
//     let sliderIndex = 1;
//     let translateX;

//     buttonNext.addEventListener('click', () => {
//         moveSliderNext();
//     });

//     buttonPrev.addEventListener('click', () => {
//         moveSliderPrev();
//     });


//     function moveSliderNext() {
//         event.preventDefault();

//         if (sliderIndex == sliderItem.length) {
//             sliderIndex = 1;
//             sliderList.style.transform = 'translateX(-0%)';
//         } else {
//             translateX = sliderItem[sliderIndex].clientWidth;
//             sliderList.style.transform =
//                 'translateX(-' + translateX * sliderIndex + 'px)';
//             sliderIndex += 1;
//         }
//     }

//     function moveSliderPrev() {
//         event.preventDefault();
//         sliderIndex -= 1;
//         if (sliderIndex <= 0) {
//             translateX = sliderItem[sliderIndex].clientWidth;
//             sliderIndex = sliderItem.length;
//             sliderList.style.transform =
//                 'translateX(-' + (translateX * sliderIndex - translateX) + 'px)';
//         } else {
//             translateX = sliderItem[sliderIndex].clientWidth;
//             sliderList.style.transform =
//                 'translateX(-' + (translateX * sliderIndex - translateX) + 'px)';
//         }
//     }
// }


// // ------TAB--------//

// function tab(headerTabs, tabSelector, contentSelector) {
//     const tabsList = document.querySelector(headerTabs),
//         tabLink = document.querySelectorAll(tabSelector),
//         content = document.querySelectorAll(contentSelector);

//     function hideTabContent() {
//         content.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('faded');
//         });
//     }

//     function showTabContent(i = 0) {
//         content[i].classList.remove('hide');
//         content[i].classList.add("faded");
//     }

//     hideTabContent();
//     showTabContent();
//     tabsList.addEventListener("click", handelChangeTab);

//     function handelChangeTab(event) {
//         event.preventDefault();
//         tabLink.forEach(item => item.classList.remove('active'));
//         if (event.target.matches('a')) {
//             event.target.classList.add('active');
//             var tabID = event.target.getAttribute('href').slice(1);
//             content.forEach((elem, i) => {
//                 if (tabID === elem.id) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         } else { return; }
//     }
// }

slides('.glazing_item', ".glazing_list", '#glazing_btn-prev', '#glazing_btn-next');
slides(".decoration_item", ".decoration_list", "#decoration_btn-prev", "#decoration_btn-next");


