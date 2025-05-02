window.addEventListener("load", function () {
    document.querySelector("header").style.opacity = "1";
    document.querySelector("header").style.transform = "translateY(0)";
    document.querySelector(".cv-container").style.opacity = "1";
    document.querySelector(".cv-container").style.transform =
        "translateY(0)";
    document.querySelector("footer").style.opacity = "1";
    document.querySelector("footer").style.transform = "translateY(0)";
    var timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(function (item, index) {
        setTimeout(function () {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }, index * 200);
    });
});
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header === null || header === void 0 ? void 0 : header.classList.add("scrolled");
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove("scrolled");
    }
});
