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
const reset = document.querySelector("#reset");

function panera() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:panera")
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

function sweetgreen() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:sweetgreen"
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

function chipotle() {
  fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=:chipotle"
  )
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}
function kfc() {
  fetch("https://autocomplete.clearbit.com/v1/companies/suggest?query=:kfc")
    .then((resp) => resp.json())
    .then((data) => pushFood(data));
}

panera();
wendy();
burgerKing();
chickFilA();
dominos();
mcdonald();
arbys();
fiveGuys();
sweetgreen();
pizzaHut();
chipotle();
kfc();

const foodArray = [];

function pushFood(food) {
  foodArray.push(food[0].logo);
}

function spinNumber(min, max) {
  spin.addEventListener("click", () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (secretNumber === 0) {
      foodHold.src = foodArray[0];
    }
    if (secretNumber === 1) {
      foodHold.src = foodArray[1];
    }
    if (secretNumber === 2) {
      foodHold.src = foodArray[2];
    }
    if (secretNumber === 3) {
      foodHold.src = foodArray[3];
    }
    if (secretNumber === 4) {
      foodHold.src = foodArray[4];
    }
    if (secretNumber === 5) {
      foodHold.src = foodArray[5];
    }
    if (secretNumber === 6) {
      foodHold.src = foodArray[6];
    }
    if (secretNumber === 7) {
      foodHold.src = foodArray[7];
    }
    if (secretNumber === 8) {
      foodHold.src = foodArray[8];
    }
    if (secretNumber === 9) {
      foodHold.src = foodArray[9];
    }
    if (secretNumber === 10) {
      foodHold.src = foodArray[10];
    }
    if (secretNumber === 11) {
      foodHold.src = foodArray[11];
    }
  });
}

spinNumber(0, 11);

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
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.className = "bink";

    closeBtn.addEventListener("click", () => {
      newList.remove();
      closeBtn.remove();
    });
    newList.textContent = newOrder.customer;

    if (Boolean(newCust.value) === true) {
      orders.append(newList, closeBtn);
    }
    form.reset();

    newList.addEventListener("click", () => {
      let popup = document.createElement("div");
      popup.id = "popup";
      let closer = document.createElement("p");
      let customerName = document.createElement("h2");
      let customerDrink = document.createElement("h2");
      let customerMain = document.createElement("h2");
      let customerSide = document.createElement("h2");
      let customerDessert = document.createElement("h2");

      customerName.textContent = `🧍 ${newOrder.customer}'s Order!`;
      customerDrink.textContent = `🥤 Drink: ${newOrder.drink}`;
      customerMain.textContent = `🍔 Main: ${newOrder.main}`;
      customerSide.textContent = `🍟 Side: ${newOrder.side}`;
      customerDessert.textContent = `🎂 Dessert: ${newOrder.dessert}`;

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

function resetButton() {
  reset.addEventListener("click", () => {
    foodHold.src =
      "https://lh3.googleusercontent.com/SgmY6NCtxwwRR0NI-T3AIVx6jab8C0W6mCws1O8OqGvtQUPpBAAd-Ayh1Zk6_i2UwrrUuJU0vdZEJF5lL_MuBSaTwztQF0rhT5GA1QKdt1qTyRkXzBe_zHlFZFTmS5vq5_sEMVcCVg=w2400?source=screenshot.guru";
    form.reset();
  });
}

resetButton();
