const accordion = document.querySelectorAll(".faq-accordion");

accordion.forEach((item, index) => {
  let btn = item.querySelector(".faq-accordion-btn");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");

    let accordionBody = item.querySelector(".faq-accordion-body");
    let icon = item.querySelector("i");
    if (item.classList.contains("open")) {
      accordionBody.style.display = "block";

      icon.classList.replace("fa-plus", "fa-xmark");
      icon.style.color = "#3147ff";
    } else {
      accordionBody.style.display = "none";
      icon.classList.replace("fa-xmark", "fa-plus");
      icon.style.color = "#121212";
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordion.forEach((item2, index2) => {
    if (index1 !== index2) {
      item2.classList.remove("open");

      let accordionBody = item2.querySelector(".faq-accordion-body");
      let icon = item2.querySelector("i");
      accordionBody.style.display = "none";
      icon.classList.replace("fa-xmark", "fa-plus");
      icon.style.color = "#121212";
    }
  });
}
