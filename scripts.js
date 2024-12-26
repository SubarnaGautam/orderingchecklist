const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.querySelector("#delete-btn")
const inputEl = document.querySelector("#input-el")
const productListContainer = document.querySelector("#productList-el")
const outerContainer  = document.querySelector("#outerContainer-el")
const productContainer = document.querySelector("#product-container")
const tableContainer = document.querySelector("#table-container")
tableContainer.style.display = "none"
productContainer.style.display = "none"

const productBtns= document.querySelectorAll(".product-btn")
const freshBtn = document.querySelector("#fresh-btn")
const dryBtn = document.querySelector("#dry-btn")
const meatBtn = document.querySelector("#meat-btn")
const seafoodBtn = document.querySelector("#seafood-btn")
const frozenBtn = document.querySelector("#frozen-btn")

const freshUlel = document.querySelector("#freshUl-el")
const dryUlel = document.querySelector("#dryUl-el")
const meatUlel = document.querySelector("#meatUl-el")
const seafoodUlel = document.querySelector("#seafoodUl-el")
const frozenUlel = document.querySelector("#frozenUl-el")


let inputValues = []
addBtn.addEventListener("click", function(){


const inputValue = inputEl.value.trim()

    console.log("clicked")


    if(inputValue){
        inputValues.push(inputValue)
    productContainer.style.display ="block"
    productListContainer.style.display = "none"                               
    productListContainer.innerHTML = 
    
                    `<ul>
                        <li id ="li-el" >${inputValue} 
                        <input type = "checkbox" id = "check"></li> 
                    </ul>`
                }
    
})

productBtns.forEach((button) => {
    button.addEventListener("click", function(){
      
        const inputValue = inputEl.value.trim()

       
        console.log(`${button.id} clicked`)
if (inputValue){
    inputValues.push(inputValue)
    tableContainer.style.display = "block"
        if (button.id === "fresh-btn"){
            freshUlel.innerHTML += `<li>${inputValue}</li>`}
    
        else if (button.id === "dry-btn"){
            dryUlel.innerHTML += `<li>${inputValue}</li>`
        }else if (button.id === "meat-btn"){
            meatUlel.innerHTML += `<li>${inputValue}</li>`
        }else if (button.id === "seafood-btn"){
            seafoodUlel.innerHTML += `<li>${inputValue}</li>`
        }else if (button.id === "frozen-btn"){
            frozenUlel.innerHTML += `<li>${inputValue}</li>`
        }
        
    
    
        inputEl.value=""
    
       } })})








deleteBtn.addEventListener("click", function(){
    containerEl.innerHTML = ""

})


    
