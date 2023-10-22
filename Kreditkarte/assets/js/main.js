function submitData() {
  const cardNumber = document.body.querySelector("#card-number").value;
  const cardHolder = document.body.querySelector("#card-holder").value;
  const expirationDate = document.body.querySelector("#expiration-date").value;
  const cvvNumber = document.body.querySelector("#cvv-number").value;
  const outputSuccessText = document.body.querySelector(".outputSuccess");

  const cardNumberPlaceholderElement = document.body.querySelector(
    ".card-number-placeholder"
  );
  const cardHolderToReplaceElement =
    document.body.querySelector(".card-holder-name");
  const expiresToReplaceElement = document.body.querySelector(
    ".expires-date-number"
  );

  if (
    (cardNumber && cardHolder && expirationDate && cvvNumber) !== "" &&
    cardNumber.length === 16 &&
    cvvNumber.length === 3 &&
    cardHolder.length <= 120
  ) {
    cardNumberPlaceholderElement.textContent = `${cardNumber
      .match(/.{1,4}/g)
      .join(" ")}`;
    cardHolderToReplaceElement.textContent = `${cardHolder}`;
    expiresToReplaceElement.textContent = `${expirationDate
      .substring(2, expirationDate.length)
      .replace("-", "/")
      .split("/")
      .reverse()
      .join("/")}`;
    if (cardHolder.length >= 30) {
      cardHolderToReplaceElement.style.fontSize = "14px";
    }
    outputSuccessText.textContent =
      "(Your data has been successfully submitted)";
  } else {
    console.log("Please check your entries");
  }
}
