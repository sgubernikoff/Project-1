let newCust = document.querySelector("#customer");
let newDrink = document.querySelector("#drink");
let newMain = document.querySelector("#main");
let newSide = document.querySelector("#side");
let newDes = document.querySelector("#dessert");
let orders = document.querySelector(".orders");
const button = document.querySelector(".submit");
const form = document.querySelector("form");
const spin = document.querySelector("#spin");
const foodHold = document.querySelector("#foodContainer");

function tacoBell() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:taco%20bell"
  )
    .then((resp) => resp.json())
    .then((data) => {
      pushFood(data);
    });
}

function wendy() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:wendy")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function burgerKing() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:burger")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function chickFilA() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:chick")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function dominos() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:domino")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function mcdonald() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:mcdonald%27s"
  )
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function arbys() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:arbys")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function fiveGuys() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:fiveguys"
  )
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function shakeShack() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:shakeshack"
  )
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function pizzaHut() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:pizzahut"
  )
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

function zaxbys() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:zaxbys")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}
function kfc() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:kfc")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

tacoBell();
wendy();
burgerKing();
chickFilA();
dominos();
mcdonald();
arbys();
fiveGuys();
shakeShack();
pizzaHut();
zaxbys();
kfc();

const foodArray = [];

function pushFood(food) {
  foodArray.push(food[0].logo);
}

function spinNumber(min, max) {
  spin.addEventListener("click", () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    Math.floor(Math.random() * (max - min + 1) + min);
    renderImage();
    console.log(foodArray);
  });
}

spinNumber();

function renderImage() {
  const generateImg = foodArray[spinNumber(0, 11)];
  console.log(generateImg);
  return generateImg;
}

// function loadWendy(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 2) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadBurgerKing(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 3) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadChickFilA(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 4) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadDominos(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 5) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadMcd(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 6) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadArby(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 7) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadFiveGuys(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 8) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadShakeShack(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 9) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadPizzaHut(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 10) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadZaxbys(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 11) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

// function loadKfc(taco) {
//   spin.addEventListener("click", () => {
//     let secretNumber = Math.trunc(Math.random() * 12) + 1;
//     console.log(secretNumber);
//     if (secretNumber === 12) {
//       foodHold.src = taco[0].logo;
//     }
//   });
// }

function addOrder() {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const newOrder = {
      customer: newCust.value,
      drink: newDrink.value,
      main: newMain.value,
      side: newSide.value,
      dessert: newDes.value,
    };

    let newList = document.createElement("li");
    newList.textContent = newOrder.customer;
    if (Boolean(newCust.value) === true) {
      orders.append(newList);
    }
    form.reset();

    newList.addEventListener("click", () => {
      let popup = document.createElement("div");
      popup.id = "popup";
      let closer = document.createElement("p");
      closer.textContent = "X";
      let customerName = document.createElement("h2");
      let customerDrink = document.createElement("h2");
      let customerMain = document.createElement("h2");
      let customerSide = document.createElement("h2");
      let customerDessert = document.createElement("h2");

      customerName.textContent = `Customer: ${newOrder.customer}`;
      customerDrink.textContent = `Drink: ${newOrder.drink}`;
      customerMain.textContent = `Main: ${newOrder.main}`;
      customerSide.textContent = `Side: ${newOrder.side}`;
      customerDessert.textContent = `Dessert: ${newOrder.dessert}`;

      document.body.append(popup);

      popup.append(
        closer,
        customerName,
        customerDrink,
        customerMain,
        customerSide,
        customerDessert
      );

      closePopup();
    });
  });
}

addOrder();

function closePopup() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      let popup = document.querySelector("#popup");
      popup.remove();
    }
  });
}
