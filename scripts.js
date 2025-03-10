// === 1. Global Variables ===
// DOM Elements
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const resultBtn = document.querySelector("#result-btn");
const backBtn = document.querySelector("#back-btn");

const inputEl = document.querySelector("#input-el");
const productListContainer = document.querySelector("#productList-el");
const outerContainer = document.querySelector("#outerContainer-el");
const productContainer = document.querySelector("#product-container");
const tableContainer = document.querySelector("#table-container");
const resultEl = document.querySelector("#result-el");

const productBtns = document.querySelectorAll(".product-btn");
const freshBtn = document.querySelector("#fresh-btn");
const dryBtn = document.querySelector("#dry-btn");
const meatBtn = document.querySelector("#meat-btn");
const seafoodBtn = document.querySelector("#seafood-btn");
const frozenBtn = document.querySelector("#frozen-btn");

const freshUlel = document.querySelector("#freshUl-el");
const dryUlel = document.querySelector("#dryUl-el");
const meatUlel = document.querySelector("#meatUl-el");
const seafoodUlel = document.querySelector("#seafoodUl-el");
const frozenUlel = document.querySelector("#frozenUl-el");

// Date and Heading
const currrentDate = new Date();
const formattedDate = currrentDate.toISOString().split("T")[0];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = dayNames[currrentDate.getDay()];
const headingEl = document.querySelector("#heading-el");

// Input Values and Local Storage Initialization
const inputValues = [];
if (!localStorage.getItem("freshList")) {
    localStorage.setItem("freshList", JSON.stringify([]));
}

// UI State Initialization
tableContainer.style.display = "none";
productContainer.style.display = "none";
deleteBtn.style.display = "none";
backBtn.style.display = "none";
resultEl.style.display = "none";


headingEl.innerHTML += ` ${formattedDate} - ${currentDay}`;

// === 2. Add Button Logic ===
addBtn.addEventListener("click", function () {
    const inputValue = inputEl.value.trim();
    if (inputValue) {
        //console.log("clicked");
        productContainer.style.display = "block";
        productListContainer.style.display = "none";
    } else {
        alert("Please enter a product to add!");
    }
});

// === 3. Product Category Buttons Logic ===
productBtns.forEach((button) => {
    button.addEventListener("click", function () {
        const inputValue = inputEl.value.trim();
        if (!inputValue) return;

        console.log(`${button.id} clicked`);

        // Update Local Storage
        //const storedData = JSON.parse(localStorage.getItem("orderLit"));
       // storedData.push(inputValue);
        //localStorage.setItem("orderLit", JSON.stringify(storedData));
         // Show Table and Populate Lists with innerHTML
        tableContainer.style.display = "block";

        if (button.id === "fresh-btn")  {
            let storedDataF = JSON.parse(localStorage.getItem("freshList")) || []
            storedDataF.push(inputValue)
            localStorage.setItem("freshList", JSON.stringify(storedDataF))
            freshUlel.innerHTML = "";
            storedDataF.forEach((item) => {
                freshUlel.innerHTML += `<li>${item}</li>`
            })
        } else if (button.id === "dry-btn") {
            let storedDataD = JSON.parse(localStorage.getItem("dryList")) || []
            storedDataD.push(inputValue)
            localStorage.setItem("dryList", JSON.stringify(storedDataD))
            dryUlel.innerHTML = "";
            storedDataD.forEach((item) => {
                dryUlel.innerHTML += `<li>${item}</li>`
            })
        } else if (button.id === "meat-btn") {
            let storedDataM = JSON.parse(localStorage.getItem("meatList")) || []
            storedDataM.push(inputValue)
            localStorage.setItem("meatList", JSON.stringify(storedDataM))
            meatUlel.innerHTML = ""
            storedDataM.forEach((item) => {
                meatUlel.innerHTML += `<li>${item}</li>` 
            })
        } else if (button.id === "seafood-btn") {
            let storedDataS = JSON.parse(localStorage.getItem("seafoodList")) || []
            storedDataS.push(inputValue)
            localStorage.setItem("seafoodList", JSON.stringify(storedDataS))
            seafoodUlel.innerHTML = ""
            storedDataS.forEach((item) => {
                seafoodUlel.innerHTML += `<li>${item}</li>` 
            })
        } else if (button.id === "frozen-btn") {
            let storedDataFz = JSON.parse(localStorage.getItem("frozenList")) || []
            storedDataFz.push(inputValue)
            localStorage.setItem("frozenList", JSON.stringify(storedDataFz))
            frozenUlel.innerHTML = ""
            storedDataFz.forEach((item)=>{
                frozenUlel.innerHTML += `<li>${item}</li>`;
            })
        }

        productContainer.style.display = "none";
        inputEl.value = "";
        deleteBtn.style.display = "block";
        resultBtn.style.display = "block";
    })})


// === 4. Delete Button Logic ===
deleteBtn.addEventListener("click", function () {
    localStorage.removeItem("freshList");
    localStorage.removeItem("dryList");
    localStorage.removeItem("meatList");
    localStorage.removeItem("seafoodList");
    localStorage.removeItem("frozenList");

    // Clear lists using innerHTML
    freshUlel.innerHTML = "";
    dryUlel.innerHTML = "";
    meatUlel.innerHTML = "";
    seafoodUlel.innerHTML = "";
    frozenUlel.innerHTML = "";

    tableContainer.style.display = "none";
    deleteBtn.style.display = "none";
    resultEl.style.display = "none";
});

resultBtn.addEventListener("click", function () {
    const keys = ["freshList", "dryList", "meatList", "frozenList", "seafoodList"];
    const resultValues = keys.map(key => JSON.parse(localStorage.getItem(key)) || []);
    
    console.log("clicked");
    
    resultEl.innerHTML = `
        <h3>Order list.</h3>
        ${resultValues.map((list, index) => `
            <h4>${keys[index]}:</h4>
            <ul>
                ${list.map(item => `<li>${item}</li>`).join("")}
            </ul>`
        ).join("")} 
    `;

    resultBtn.style.display = "none"
    resultEl.style.display= "block"
    backBtn.style.display="block"
    deleteBtn.style.display = "block"
    tableContainer.style.display = "none"
});
backBtn.addEventListener("click", function (){
    resultEl.style.display = "none"
    backBtn.style.display = "none"
    resultBtn.style.display= "block"
      deleteBtn.style.display = "none"

  
})