const inputName = document.querySelector(".inputName");
const inputNumber = document.querySelector(".inputNumber");
const cardName = document.querySelector(".cardName");
const cardNumber = document.querySelector(".cardNumber");
const inputMonth = document.querySelector(".month-input");
const inputYear = document.querySelector(".year-input");
const cardDate = document.querySelector(".cardDate");
const inputCvv = document.querySelector(".inputCvv");
const cardCvv = document.querySelector(".cardCvv");
const cardImgFront = document.querySelector(".card-front");
const cardImgBack = document.querySelector(".card-back");

inputNumber.addEventListener("input", () => {
  cardNumber.textContent = inputNumber.value.replace(/\d{4}(?=.)/g, "$& "); //regex de citit
});
inputName.addEventListener("input", () => {
  cardName.textContent = inputName.value;
});

let year = "0000";
let month = "00";
inputMonth.addEventListener("input", () => {
  month = inputMonth.value;
  cardDate.textContent = `${month}/${year}`;
});
inputYear.addEventListener("input", () => {
  year = inputYear.value;
  // `${month} / ${inputYear.value} `;
  cardDate.textContent = `${month}/${year}`;
});
inputCvv.addEventListener("input", () => {
  cardCvv.textContent = inputCvv.value;
});

// inputCvv.addEventListener("focus"),
//   () => {
//     cardImgFront.classList.toggle("card-front");
//     cardImgFront.classList.toggle("card-back");
//   };
inputCvv.addEventListener("focus", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
});
inputCvv.addEventListener("focusout", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
});
