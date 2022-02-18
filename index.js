let newCust = document.querySelector("#customer");
let newDrink = document.querySelector("#drink");
let newMain = document.querySelector("#main");
let newSide = document.querySelector("#side");
let newDes = document.querySelector("#dessert");
let orders = document.querySelector(".orders");
let menu = document.querySelector(".menuLink");
let menuHolder = document.querySelector(".menu");
const button = document.querySelector(".submit");
const form = document.querySelector("form");
const spin = document.querySelector("#spin");
const foodHold = document.querySelector("#foodContainer");
const reset = document.querySelector("#reset");
const foodArray = [];
const paneraLink = document.createElement("a");
const wendyLink = document.createElement("a");
const burgerKingLink = document.createElement("a");
const chickFilALink = document.createElement("a");
const dominosLink = document.createElement("a");
const mcdonaldLink = document.createElement("a");
const arbysLink = document.createElement("a");
const fiveGuysLink = document.createElement("a");
const sweetGreenLink = document.createElement("a");
const pizzaHutLink = document.createElement("a");
const chipotleLink = document.createElement("a");
const kfcLink = document.createElement("a");
const menuLinks = document.querySelector("#menuLinks");
const menuListv = document.querySelector("#menuList");
let fries = document.querySelector(".fries");
let enter = document.querySelector(".entry");

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
    console.log(secretNumber);
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
    newList.className = "list";
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.className = "bink";

    closeBtn.addEventListener("click", () => {
      newList.remove();
      closeBtn.remove();
    });
    newList.textContent = newOrder.customer.toUpperCase();

    if (
      Boolean(newCust.value) === true &&
      Boolean(newDrink.value) === true &&
      Boolean(newMain.value) === true &&
      Boolean(newSide.value) === true &&
      Boolean(newDes.value) === true
    ) {
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

function createMenuList() {
  const menuButton = document.querySelector(".menu");

  menuButton.addEventListener("click", () => {
    console.log("click");

    menuList.append(
      wendyLink,
      paneraLink,
      burgerKingLink,
      mcdonaldLink,
      dominosLink,
      fiveGuysLink,
      chickFilALink,
      sweetGreenLink,
      pizzaHutLink,
      arbysLink,
      chipotleLink,
      kfcLink
    );
    paneraLink.href = "https://www.panerabread.com/en-us/home.html";
    paneraLink.textContent = "Panera";
    paneraLink.className = "pan";
    paneraLink.target = "_blank";
    wendyLink.href = "https://order.wendys.com/categories?site=menu";
    wendyLink.textContent = "Wendy's";
    wendyLink.className = "wen";
    wendyLink.target = "_blank";
    burgerKingLink.href = "https://www.bk.com/menu";
    burgerKingLink.textContent = "Burger King";
    burgerKingLink.className = "bur";
    burgerKingLink.target = "_blank";
    mcdonaldLink.href = "https://www.mcdonalds.com/us/en-us/full-menu.html";
    mcdonaldLink.textContent = "McDonald's";
    mcdonaldLink.className = "mcd";
    mcdonaldLink.target = "_blank";
    dominosLink.href =
      "https://www.dominos.com/en/pages/order/menu#!/menu/category/viewall/";
    dominosLink.textContent = "Domino's";
    dominosLink.className = "dom";
    dominosLink.target = "_blank";
    fiveGuysLink.href =
      "https://www.fiveguys.com/Menu?gclid=Cj0KCQiA3rKQBhCNARIsACUEW_a2cTE1zBYMR9P5NR-EJUlRGqduwIsDBw8K9-SbVZXWfWOOFeIoEloaArhVEALw_wcB";
    fiveGuysLink.textContent = "Five Guy's";
    fiveGuysLink.className = "fiv";
    fiveGuysLink.target = "_blank";
    sweetGreenLink.href =
      "https://www.sweetgreen.com/menu?gclid=Cj0KCQiA3rKQBhCNARIsACUEW_a_0RlzWXw7qMFjEBLhayQAgiahvGJZiTYYsrJgrInlPbP0Z0gDFAIaAgX_EALw_wcB";
    sweetGreenLink.textContent = "Sweetgreen";
    sweetGreenLink.className = "swe";
    sweetGreenLink.target = "_blank";
    pizzaHutLink.href = "https://www.pizzahut.com/";
    pizzaHutLink.textContent = "Pizza Hut";
    pizzaHutLink.className = "piz";
    pizzaHutLink.target = "_blank";
    arbysLink.href = "https://www.arbys.com/menu/";
    arbysLink.textContent = "Arby's";
    arbysLink.className = "arb";
    arbysLink.target = "_blank";
    chickFilALink.href =
      "https://www.chick-fil-a.com/menu?gclid=Cj0KCQiA3rKQBhCNARIsACUEW_Zl9MCa-rOyM-NS61Sgo9nuoorWRtPMPOa0hXbkXiA2fwnVAOMrVdIaAqUzEALw_wcB";
    chickFilALink.textContent = "Chick-Fil-A";
    chickFilALink.className = "chi";
    chickFilALink.target = "_blank";
    chipotleLink.href = "https://www.chipotle.com/order/#menu";
    chipotleLink.textContent = "Chipotle";
    chipotleLink.className = "chip";
    chipotleLink.target = "_blank";
    kfcLink.href = "https://www.kfc.com/menu";
    kfcLink.textContent = "KFC";
    kfcLink.className = "kfc";
    kfcLink.target = "_blank";
  });
}
createMenuList();

// function tBelly() {
//   let find = document.createElement("a");
//   let jeff = document.querySelector(".jep");
//   find.textContent = "TBell Special";
//   jeff.append(find);
//   find.addEventListener("click", () => {
//     find.target = "_blank";
//     find.href =
//       "https://lh3.googleusercontent.com/S1hc3rOGX_1zdIi42MvvTrzqXc5Az6nxqMd3z3m4QwWOx9s3lKqhbkfDZ1KHVv9zAzqbt5YecLu2MEWK5RSEKDsIsYxovuDywMG825y4B5or28OXeirzjnOHye01dgSigJ-17Zq2MA=w2400";
//     find.remove();
//     jeff.remove();
//   });
// }
// tBelly();

function startUp() {
  fries.addEventListener("click", () => {
    fries.className = "fries hidden";
    enter.className = "entry hidden";
  });
}

startUp();
