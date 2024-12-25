const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.querySelector("#delete-btn")
const inputEl = document.querySelector("#input-el")
const containerEl = document.querySelector("#container-el")

addBtn.addEventListener("click", function(){
    
    if(inputEl.value){
containerEl.innerHTML += inputEl.value
inputEl.value = ""
    }
    console.log("clicked")
}
)
deleteBtn.addEventListener("click", function(){
    containerEl.innerHTML = ""

})

    
