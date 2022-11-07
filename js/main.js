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

// const numbersInput = (idname) => {
//   nr = document.querySelector(idname).textContent;
// };
// console.log(numbersInput("#nr2"));

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

inputNumber.addEventListener("input", () => {
  arrInputNumber[0].textContent = inputNumber.value[0];
  arrInputNumber[1].textContent = inputNumber.value[1];
  arrInputNumber[2].textContent = inputNumber.value[2];
  arrInputNumber[3].textContent = inputNumber.value[3];
  arrInputNumber[4].textContent = inputNumber.value[4];
  arrInputNumber[5].textContent = inputNumber.value[5];
  arrInputNumber[6].textContent = inputNumber.value[6];
  arrInputNumber[7].textContent = inputNumber.value[7];
  arrInputNumber[8].textContent = inputNumber.value[8];
  arrInputNumber[9].textContent = inputNumber.value[9];
  arrInputNumber[10].textContent = inputNumber.value[10];
  arrInputNumber[11].textContent = inputNumber.value[11];
  arrInputNumber[12].textContent = inputNumber.value[12];
  arrInputNumber[13].textContent = inputNumber.value[13];
  arrInputNumber[14].textContent = inputNumber.value[14];
  arrInputNumber[15].textContent = inputNumber.value[15];
});

//first code
// inputNumber.addEventListener("input", () => {
//   nr1.textContent = inputNumber.value[0];
//   inputNumber.addEventListener("input", () => {
//     nr2.textContent = inputNumber.value[1];
//     inputNumber.addEventListener("input", () => {
//       nr3.textContent = inputNumber.value[2];
//       inputNumber.addEventListener("input", () => {
//         nr4.textContent = inputNumber.value[3];
//         inputNumber.addEventListener("input", () => {
//           nr5.textContent = inputNumber.value[4];
//           inputNumber.addEventListener("input", () => {
//             nr6.textContent = inputNumber.value[5];
//             inputNumber.addEventListener("input", () => {
//               nr7.textContent = inputNumber.value[6];
//               inputNumber.addEventListener("input", () => {
//                 nr8.textContent = inputNumber.value[7];
//                 inputNumber.addEventListener("input", () => {
//                   nr9.textContent = inputNumber.value[8];
//                   inputNumber.addEventListener("input", () => {
//                     nr10.textContent = inputNumber.value[9];
//                     inputNumber.addEventListener("input", () => {
//                       nr11.textContent = inputNumber.value[10];
//                       inputNumber.addEventListener("input", () => {
//                         nr12.textContent = inputNumber.value[11];
//                         inputNumber.addEventListener("input", () => {
//                           nr13.textContent = inputNumber.value[12];
//                           inputNumber.addEventListener("input", () => {
//                             nr14.textContent = inputNumber.value[13];
//                             inputNumber.addEventListener("input", () => {
//                               nr15.textContent = inputNumber.value[14];
//                               inputNumber.addEventListener("input", () => {
//                                 nr16.textContent = inputNumber.value[15];
//                               });
//                             });
//                           });
//                         });
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

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
  cardName.style.border = "1px solid red";
  cardName.style.borderRadius = "5px";
});
inputName.addEventListener("focusout", () => {
  cardName.style.border = "";
});
inputNumber.addEventListener("focus", () => {
  cardNumber.style.border = "1px solid red";
  cardNumber.style.borderRadius = "5px";
});
inputNumber.addEventListener("focusout", () => {
  cardNumber.style.border = "";
});
inputCvv.addEventListener("focus", () => {
  cardCvv.style.border = "1px solid red";
  cardCvv.style.borderRadius = "5px";
});
inputCvv.addEventListener("focusout", () => {
  cardCvv.style.border = "";
});
inputMonth.addEventListener("focus", () => {
  cardDate.style.border = "1px solid red";
  cardDate.style.borderRadius = "5px";
});
inputMonth.addEventListener("focusout", () => {
  cardDate.style.border = "";
});
inputYear.addEventListener("focus", () => {
  cardDate.style.border = "1px solid red";
  cardDate.style.borderRadius = "5px";
});
inputYear.addEventListener("focusout", () => {
  cardDate.style.border = "";
});
inputCvv.addEventListener("focus", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
});
inputCvv.addEventListener("focusout", () => {
  cardImgFront.classList.toggle("card-front");
  cardImgFront.classList.toggle("card-back");
  // cardImgFront.style.transform = "rotateY(90deg)";
});
