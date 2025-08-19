// State
let bank = [];
let odds = [];
let evens = [];

// Brings div element to JS file to append and render new elements
const div = document.querySelector("#app");

// Function Component to add form elements
function formElements() {
  // Creates form element to append all children to
  let form = document.createElement("form");

  // Creates heading for the document
  let docTitle = document.createElement("h1");
  docTitle.innerText = "Odds and Events";

  // Creates input label
  let inputLabel = document.createElement("p");
  inputLabel.innerText = "Add a number to the bank";

  // Creates input box
  let input = document.createElement("input");
  input.type = "text";
  input.id = "number_input";
  input.name = "number_input";

  // Creates 'add to bank' button
  let addButton = document.createElement("button");
  addButton.innerText = "Add to Bank";
  addButton.style.marginLeft = "10px";

  //* Listens for a click to store numbers in the bank array
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const n = parseInt(input.value);
    if (!Number.isNaN(n)) {
      bank.push(n);
      render();
    }
    // clears the input field after the user adds a number to the bank array
    input.value = "";
  });

  // Creates 'Sort 1' button
  let sortOnebutton = document.createElement("button");
  sortOnebutton.innerText = "Sort One";
  sortOnebutton.style.marginLeft = "10px";
  //listens for a click to sort the first number in the bank box to the odd or even boxes
  sortOnebutton.addEventListener("click", (event) => {
    event.preventDefault();
    if (bank.length === 0) return null;
    let firstFrombank = bank.shift();
    if (firstFrombank % 2 !== 0) {
      odds.push(firstFrombank);
    } else {
      evens.push(firstFrombank);
    }
    render();
  });

  // Create 'Sort All' Button
  let sortAllbutton = document.createElement("button");
  sortAllbutton.innerText = "Sort All";
  sortAllbutton.style.marginLeft = "10px";
  // Listens for a click to sort all numbers in the bank box
  sortAllbutton.addEventListener("click", (event) => {
    event.preventDefault();
    if (bank.length === 0) return null;
    for (let i = 0; i < bank.length; ++i) {
      if (bank[i] % 2 !== 0) {
        odds.push(bank[i]);
      } else {
        evens.push(bank[i]);
      }
    }
    bank.length = 0; // Clears values in bank. The sort one button clears bank values because it uses shift()
    render();
  });

  // Creates bank header
  let bankHeader = document.createElement("h2");
  bankHeader.innerText = "Bank";
  // Creates box to display the values from the bank array
  let bankBox = document.createElement("div");
  bankBox.style.border = "1px solid black";
  bankBox.style.minHeight = "20px";
  bankBox.style.width = "50%";
  bankBox.style.marginTop = "20px";

  // Creates odds header
  let oddsHeader = document.createElement("h2");
  oddsHeader.innerText = "Odds";
  //creates box for odd numbers
  let oddsBox = document.createElement("div");
  oddsBox.style.border = "1px solid black";
  oddsBox.style.minHeight = "20px";
  oddsBox.style.width = "50%";
  oddsBox.style.marginTop = "20px";

  // Creates evens header
  let evensHeader = document.createElement("h2");
  evensHeader.innerText = "Evens";
  // Creates box for even numbers
  let evensBox = document.createElement("div");
  evensBox.style.border = "1px solid black";
  evensBox.style.minHeight = "20px";
  evensBox.style.width = "50%";
  evensBox.style.marginTop = "20px";

  // renders the array values in each box after state changes with button clicks
  const render = () => {
    bankBox.textContent = bank.join(", ");
    oddsBox.textContent = odds.join(", ");
    evensBox.textContent = evens.join(", ");
  };

  form.append(
    docTitle,
    inputLabel,
    input,
    addButton,
    sortOnebutton,
    sortAllbutton,
    bankHeader,
    bankBox,
    oddsHeader,
    oddsBox,
    evensHeader,
    evensBox
  );
  div.append(form);
}

formElements();
