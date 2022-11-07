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
const visaLogo = document.querySelector(".visa");
const mastercardLogo = document.querySelector(".mastercard");
const discoverLogo = document.querySelector(".discover");
const logoImages = document.querySelectorAll(".card-logo-img")

let year = "0000"; // cardYear
let month = "00"; // cardMonth

inputName.addEventListener("input", () => {
  // cardName.style.border = "1px solid black";
  cardName.textContent = inputName.value;
});

cardNumber.textContent = "#### #### #### ####";
inputNumber.addEventListener("input", (event) => {
  cardNumber.textContent = inputNumber.value.replace(/\d{4}(?=.)/g, "$& "); //regex de citit

  if (event.target.value.startsWith("4")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    })
    visaLogo.classList.add("visible");
  } else if (event.target.value.startsWith("5")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    })
    mastercardLogo.classList.add("visible");
  } else if (event.target.value.startsWith("6")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    })
    discoverLogo.classList.add("visible");
  }

});
inputMonth.addEventListener("input", () => {
  month = inputMonth.value;
  cardDate.textContent = `${month}/${year}`;
});
inputYear.addEventListener("input", () => {
  year = inputYear.value;
  cardDate.textContent = `${month}/${year}`;
});

inputCvv.addEventListener("input", () => {
  cardCvv.textContent = inputCvv.value;
});

inputName.addEventListener("focus", () => {
  cardName.style.border = "1px solid white";
  cardName.style.borderRadius = "5px";
});
inputName.addEventListener("focusout", () => {
  cardName.style.border = "";
});

//Focusarea pe div Card din input
inputNumber.addEventListener("focus", () => {
  cardNumber.style.border = "1px solid white";
  cardNumber.style.borderRadius = "5px";
});
inputNumber.addEventListener("focusout", () => {
  cardNumber.style.border = "";
});
inputCvv.addEventListener("focus", () => {
  // cardCvv.style.border = "1px solid white";
  cardCvv.style.borderRadius = "5px";
});
inputCvv.addEventListener("focusout", () => {
  cardCvv.style.border = "";
});
inputMonth.addEventListener("focus", () => {
  cardDate.style.border = "1px solid white";
  cardDate.style.borderRadius = "5px";
});
inputMonth.addEventListener("focusout", () => {
  cardDate.style.border = "";
});
inputYear.addEventListener("focus", () => {
  cardDate.style.border = "1px solid white";
  cardDate.style.borderRadius = "5px";
});
inputYear.addEventListener("focusout", () => {
  cardDate.style.border = "";
});
inputCvv.addEventListener("focus", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
  cardImgBack.classList.toggle("card-front");
  cardImgBack.classList.toggle("card-back");
});
inputCvv.addEventListener("focusout", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
  cardImgBack.classList.toggle("card-front");
  cardImgBack.classList.toggle("card-back");
});
