const joke = [
  ["0+2", "2"],
  ["1+3", "4"],
  ["2+4", "6"],
  ["3+5", "8"],
  ["4+6", "10"],
  ["5+7", "12"],
  ["6+8", "14"],
  ["7+9", "16"],
  ["8+10", "18"],
  ["9+11", "20"],
  ["10+12", "22"],
  ["11+13", "24"],
  ["12+14", "26"],
  ["13+15", "28"],
  ["14+16", "30"],
  ["15+17", "32"],
  ["16+18", "34"],
  ["17+19", "36"],
  ["18+20", "38"],
  ["19+21", "40"],
  ["20+22", "42"],
  ["21+23", "44"],
  ["22+24", "46"],
  ["23+25", "48"],
];

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((index, item) => {
  index.style.backgroundColor = getRandomColor();
});

joke.forEach((item, index) => {
  if (index < boxes.length) {
    boxes[index].innerHTML = item[0] + 1;
  }
});

const hoverElement = document.querySelectorAll("#box1");

hoverElement.forEach((index, item) => {
  index.addEventListener("mouseover", () => {
    index.style.backgroundColor = getRandomColor();
  });
  index.addEventListener("mouseout", () => {
    index.style.backgroundColor = getRandomColor();
  });
});

let step = 0;
let ochko1 = 0;
let ochko2 = 0;

let savol = document.querySelector(".savolC");

let savollar = document.querySelector("#savol");
let savollarsee = document.querySelector("#savole");

let savole = document.querySelector(".savolCe");
let savollare = document.querySelector("#savole");

let currentPlayer = 1;

let savollars = document.querySelector("#savolInt");

let savollarse = document.querySelector("#savolInte");

while (ochko1 < 10 || ochko2 < 10) {
  // Oyinchilarga raqam tushishi uchun
  const ranNum1 = Math.floor(Math.random() * 6) + 1;
  const ranNum2 = Math.floor(Math.random() * 6) + 1;

  // Birinchi o'yinchining savoli
  const currentIndex1 = ranNum1 > joke.length ? joke.length - 1 : ranNum1 - 1;
  const savol1 = joke[currentIndex1];

  // Ikkinchi o'yinchining savoli
  const currentIndex2 = ranNum2 > joke.length ? joke.length - 1 : ranNum2 - 1;
  const savol2 = joke[currentIndex2];

  function Try() {
    if (currentPlayer === 1) {
      savol.style.display = "flex";
      savollar.textContent =
        ranNum1 > joke.length
          ? `Birinchi o'yinchiga oxirgi savol: ${savol1[0]} = `
          : `Birinchi o'yinchiga ${ranNum1} raqami tushdi: ${savol1[0]} = `;
      currentPlayer = 2;
    } else {
      savole.style.display = "flex";
      savollarsee.textContent =
        ranNum2 > joke.length
          ? `Ikkinchi o'yinchiga oxirgi savol: ${savol2[0]} = `
          : `Ikkinchi o'yinchiga ${ranNum2} raqami tushdi: ${savol2[0]} = `;

      currentPlayer = 1;
    }
  }

  // Javoblar tekshiriladi va ochko qo'shiladi
  function Submits() {
    if (savol1[1] === savollars.value) {
      ochko1 += ranNum1;
      joke.splice(0, ranNum1);
      savollar.textContent = "True";
      setTimeout(() => {
        savol.style.display = "none";
      }, 2000);
    } else {
      savollar.textContent = "False";
      setTimeout(() => {
        savol.style.display = "none";
      }, 2000);
    }
  }

  function Submitse() {
    if (savol2[1] === savollars.value) {
      ochko2 += ranNum2;
      joke.splice(0, ranNum2);
      savollar.textContent = "True";
      setTimeout(() => {
        savol.style.display = "none";
      }, 2000);
    } else {
      savollar.textContent = "False";
      setTimeout(() => {
        savol.style.display = "none";
      }, 2000);
    }
  }

  step++;
  if (savol2[1] === userNum2) {
  }
}

// Natija ekranga chiqariladi
if (ochko1 >= 10) {
  alert(
    `Birinchi o'yinchining natijasi: ${ochko1} ochko. ${step} qadamda yutdingiz!`
  );
} else {
  alert(
    `Ikkinchi o'yinchining natijasi: ${ochko2} ochko. ${step} qadamda yutdingiz!`
  );
}
