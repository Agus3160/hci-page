const topButton = document.getElementById("top-button");

const seccionesIds = ["empatizar", "definir", "idear", "prototipar"];
const titles = seccionesIds.map((id) => `title-${id}`);

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
});

const configNavItems = () => {
  const titulosEl = titles.map((id) => document.getElementById(id));
  seccionesIds.forEach((id, index) => {
    const seccion = document.getElementById(id);
    if (seccion != null)
      seccion.onclick = () => {
        window.scrollTo({
          top: titulosEl[index].offsetTop - 25,
          behavior: "smooth",
        });
      };
  });
};

window.onload = () => {
  configNavItems();
};
