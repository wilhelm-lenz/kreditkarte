function submitData() {
  event.preventDefault;

  const cardNumber = document.body.querySelector("#card-number").value;
  const cardHolder = document.body.querySelector("#card-holder").value;
  const expirationDate = document.body.querySelector("#expiration-date").value;
  const cvvNumber = document.body.querySelector("#cvv-number").value;
  const creditCardImgElement = document.body.querySelector(
    ".credit-card-img-wrapper"
  );
  if (
    (cardNumber && cardHolder && expirationDate && cvvNumber) !== "" &&
    cardNumber.length === 16 &&
    cvvNumber.length === 3 &&
    cardHolder.length <= 28
  ) {
    creditCardImgElement.innerHTML = `<img src="./assets/img/resourses/credit-card.svg" class="card-img" alt="credit-card">`;
    creditCardImgElement.innerHTML += `<p class="card-data-number">${cardNumber
      .match(/.{1,4}/g)
      .join(" ")}</p>`;
    creditCardImgElement.innerHTML += `<p class="card-data-name">${cardHolder}</p>`;
    creditCardImgElement.innerHTML += `<p class="card-data-exp-date">${expirationDate
      .substring(2, expirationDate.length)
      .replace("-", "/")
      .split("/")
      .reverse()
      .join("/")}</p>`;
  } else {
    console.log("Bitte prüfen");
  }
}
