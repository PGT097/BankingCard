const inputName = document.querySelector(".inputName");
const inputNumber = document.querySelector(".inputNumber");
const cardName = document.querySelector(".cardName");
const cardNumber = document.querySelector(".cardNumber");
const inputMonth = document.querySelector(".month-input");
const inputYear = document.querySelector(".year-input");
const cardDate = document.querySelector(".cardDate");
const inputCvv = document.querySelector(".inputCvv");
const cardImgFront = document.querySelector(".card-front");
const cardImgBack = document.querySelector(".card-back");
const logoImages = document.querySelector(".card-logo");
const change = document.querySelector(".is-changing");
const newImg = document.createElement("img");
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
const ccv1 = document.querySelector("#ccv1");
const ccv2 = document.querySelector("#ccv2");
const ccv3 = document.querySelector("#ccv3");
const space1 = document.querySelector("#space1");
const space2 = document.querySelector("#space2");
const space3 = document.querySelector("#space3");

let year = "YY"; // cardYear
let month = "MM"; // cardMonth
let count = 0;

const arrInputNumber = [
  nr1,
  nr2,
  nr3,
  nr4,
  space1,
  nr5,
  nr6,
  nr7,
  nr8,
  space2,
  nr9,
  nr10,
  nr11,
  nr12,
  space3,
  nr13,
  nr14,
  nr15,
  nr16,
];
console.log(arrInputNumber);
//------------------------------------------------------------------------
//select year
const optionYear = ["YY", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
for (let i = 0; i < optionYear.length; i++) {
  const option = document.createElement("option");
  option.text = optionYear[i];
  inputYear.appendChild(option);
}
//------------------------------------------------------------------------
//select month
const optionMonth = [
  "MM",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
for (let i = 0; i < optionMonth.length; i++) {
  const option = document.createElement("option");
  option.text = optionMonth[i];
  inputMonth.appendChild(option);
}

inputNumber.addEventListener("input", (e) => {
  inputNumber.value = inputNumber.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  if (inputNumber.value[count] === "^[A-Z]+$") {
    inputNumber.value = inputNumber.value.slice(0, -1);
  }
  if (inputNumber.value[count]) {
    arrInputNumber[count].textContent = inputNumber.value[count];
    console.log(count);
    if ([3, 8, 13].includes(count)) {
      arrInputNumber[count].classList.add("is-changing");
      arrInputNumber[count].classList.remove("is-changing2");
      count++;
    }
    arrInputNumber[count].classList.add("is-changing");
    arrInputNumber[count].classList.remove("is-changing2");
    count++;
    if (inputNumber.value[0] === "4") {
      newImg.src = "img/cardLogo/visa.png";
      newImg.style.height = "40px";
      newImg.style.width = "80px";
    } else if (inputNumber.value[0] === "5") {
      newImg.src = "img/cardLogo/mastercard.png";
      newImg.style.height = "50px";
      newImg.style.width = "80px";
    } else if (inputNumber.value[0] === "6") {
      newImg.src = "img/cardLogo/discover.png";
      newImg.style.height = "60px";
      newImg.style.width = "90px";
    }
    logoImages.append(newImg);
  }
});
inputNumber.addEventListener("keydown", (e) => {
  if (e.keyCode === 8 && count > 0) {
    if ([15, 10, 5].includes(count)) {
      count--;
    }
    count--;
    arrInputNumber[count].classList.remove("is-changing");
    arrInputNumber[count].classList.add("is-changing2");
    arrInputNumber[count].textContent = "#";
  }
  if (e.keyCode === 8 && count === 0) {
    newImg.remove();
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

const arrCvv = [ccv1, ccv2, ccv3];
let countCCV = 0;
const reg = new RegExp("^[0-9]+$");
inputCvv.addEventListener("input", () => {
  if (inputCvv.value[countCCV].match(reg)) {
    arrCvv[countCCV].textContent = inputCvv.value[countCCV];
    countCCV++;
  } else {
    console.log("eroare brat", inputCvv);
    inputCvv.value = inputCvv.value.slice(0, -1);
  }
});
inputCvv.addEventListener("keydown", (event) => {
  if (event.keyCode === 8 && countCCV > 0) {
    countCCV--;
    arrCvv[countCCV].textContent = "";
    console.log(countCCV);
  }
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
