const cards = document.querySelectorAll(".cards .card");

function removeActiveClassName() {
  cards.forEach((card) => {
    card.className = "card";
  });
}

function handleClickCard(e) {
  const target = e.target;
  const isActive = target.className.includes("active");

  if (!isActive) {
    removeActiveClassName();

    target.classList.add("active");
  }
}

cards.forEach((card) => {
  card.addEventListener("click", handleClickCard);
});
