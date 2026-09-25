const cardContainer = document.querySelectorAll("#cardContainer");
const card = document.querySelectorAll("#card");

    cardContainer.forEach((e, i) => {
      e.addEventListener("click", () => {
        card[i].classList.toggle("flipped");
      })
    })