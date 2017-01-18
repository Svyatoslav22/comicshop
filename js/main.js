var buttonx = document.querySelector(".cmn-toggle-switch");
var popup = document.querySelector(".mobile__menu");
var menuhidden = document.querySelector(".menumenuhidden");
var elems = document.querySelectorAll(".firstblock");
var hideElems = document.querySelectorAll(".secondblock");
buttonx.addEventListener("click", function (event) {
    popup.classList.toggle("active");
});

for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", function (event) {
        this.nextElementSibling.classList.toggle("active");
    });
}



    (function () {

        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
            });
        }

    })();
