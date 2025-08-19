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
  // Listens for a click to store numbers in the bank array
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

  // Creates bank header
  let bankHeader = document.createElement("h2");
  bankHeader.innerText = "Bank";
  // Creates box to display the values from the bank array
  let bankBox = document.createElement("div");
  bankBox.style.border = "1px solid black";
  bankBox.style.minHeight = "20px";
  bankBox.style.width = "50%";
  bankBox.style.marginTop = "20px";
  // renders the array values as a string in the bankBox
  const bankRender = () => {
    bankBox.textContent = bank.join(", ");
  };

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

  form.append(
    docTitle,
    inputLabel,
    input,
    addButton,
    bankHeader,
    bankBox,
    oddsHeader,
    oddsBox,
    evensHeader
  );
  div.append(form);
}

formElements();
