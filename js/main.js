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
const logoImages = document.querySelectorAll(".card-logo-img");
const nr1 = document.querySelector("#nr1");
const nr2 = document.querySelector("#nr2");
const nr3 = document.querySelector("#nr3");
const nr4 = document.querySelector("#nr4");
const nr5 = document.querySelector("#nr5");
const nr6 = document.querySelector("#nr6");
const nr7 = document.querySelector("#nr7");
const nr8 = document.querySelector("#nr8");
const nr9 = document.querySelector("#nr9");
const nr10 = document.querySelector("#nr10");
const nr11 = document.querySelector("#nr11");
const nr12 = document.querySelector("#nr12");
const nr13 = document.querySelector("#nr13");
const nr14 = document.querySelector("#nr14");
const nr15 = document.querySelector("#nr15");
const nr16 = document.querySelector("#nr16");
let year = "22"; // cardYear
let month = "11"; // cardMonth
let count = 0;

let arrInputNumber = [];
arrInputNumber.push(
  nr1,
  nr2,
  nr3,
  nr4,
  nr5,
  nr6,
  nr7,
  nr8,
  nr9,
  nr10,
  nr11,
  nr12,
  nr13,
  nr14,
  nr15,
  nr16
);
console.log(arrInputNumber);

const reg = new RegExp("^[0-9]+$");

inputNumber.addEventListener("input", (event) => {
  if (event.target.value.startsWith("4")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    });
    visaLogo.classList.add("visible");
  } else if (event.target.value.startsWith("5")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    });
    mastercardLogo.classList.add("visible");
  } else if (event.target.value.startsWith("6")) {
    logoImages.forEach((item) => {
      item.classList.remove("visible");
    });
    discoverLogo.classList.add("visible");
  }
  if (inputNumber.value[count].match(reg)) {
    arrInputNumber[count].textContent = inputNumber.value[count];
    count++;
  }
  console.log(count);
});

inputNumber.addEventListener("keydown", (event) => {
  if (event.keyCode == 8 && count > 0) {
    count--;
    arrInputNumber[count].textContent = "#";
    console.log(count);
  }
});

inputName.addEventListener("input", () => {
  cardName.textContent = inputName.value;
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
//Focusarea pe div Card din input
inputName.addEventListener("focus", () => {
  cardName.style.border = "1px solid white";
  cardName.style.borderRadius = "5px";
});
inputName.addEventListener("focusout", () => {
  cardName.style.border = "";
});
inputNumber.addEventListener("focus", () => {
  cardNumber.style.border = "1px solid white";
  cardNumber.style.borderRadius = "5px";
});
inputNumber.addEventListener("focusout", () => {
  cardNumber.style.border = "";
});
inputCvv.addEventListener("focus", () => {
  cardCvv.style.border = "1px solid white";
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
