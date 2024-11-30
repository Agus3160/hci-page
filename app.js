const topButton = document.getElementById("top-button");

topButton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topButton.classList.remove("opacity-0");
    topButton.classList.add("opacity-100");
  } else {
    topButton.classList.remove("opacity-100");
    topButton.classList.add("opacity-0");
  }
})