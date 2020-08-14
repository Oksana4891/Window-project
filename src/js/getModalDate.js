const modalDate = {};

function getModalDate() {
    const typeWindows = document.querySelector(".popup_tabs--menu"),
        widthWindow = document.querySelector("#width"),
        heightWindow = document.querySelector("#height"),
        viewWindow = document.querySelector("#view_type"),
        profileWindow = document.querySelector(".radio-box");


    function getDate(event, elem, key) {
        elem.addEventListener(event, (e) => {
            if (e.target.tagName=="IMG") {
                modalDate[key] = e.target.alt;
            }
            else {
                modalDate[key] = e.target.value;
            }  
            console.log(modalDate);
        }
        );
      
    }

getDate('input', widthWindow, "width");
getDate('input', heightWindow, "height");
getDate('click', typeWindows, "form");
getDate('change', viewWindow, "view");
getDate('change', profileWindow, "profile");

}

getModalDate();