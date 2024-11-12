const key = "notepad-memory"

const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")
const textField = document.getElementById("nameInput")

let savedArray= JSON.parse(localStorage.getItem(key)) || []

saveButton.addEventListener("click", function(){
   const name = textField.value
        if (name) {
        savedArray.push(name)
        localStorage.setItem(key, JSON.stringify(savedArray))
        console.log(savedArray)
        textField.value = ""
    } else{
        alert ("Insert your fucking name!!!")
    }
})


deleteButton.addEventListener("click", function(){
    const savedContent = localStorage.getItem(key)
    if(!savedContent){
        alert("not found a fucking name!")
    }else{
        textField.value = ""
        localStorage.removeItem(key)
        savedArray = []
        console.log("All names deleted.")
    }
})



