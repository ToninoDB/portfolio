window.addEventListener("load", () => {
  document.querySelector("header")!.style.opacity = "1";
  document.querySelector("header")!.style.transform = "translateY(0)";

  (document.querySelector(".cv-container") as HTMLElement)!.style.opacity = "1";
  (document.querySelector(".cv-container") as HTMLElement)!.style.transform =
    "translateY(0)";

  document.querySelector("footer")!.style.opacity = "1";
  document.querySelector("footer")!.style.transform = "translateY(0)";

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      (item as HTMLElement).style.opacity = "1";
      (item as HTMLElement).style.transform = "translateX(0)";
    }, index * 200);
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});
