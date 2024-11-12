const key = "notepad-memory"


const saveButton = document.getElementById("save")
const deleteButton = document.getElementById("delete")

const textField = document.getElementById("nameInput")

saveButton.addEventListener("click", function(){

    localStorage.setItem(key, textField.value)
})

deleteButton.addEventListener("click", function(){
    const savedContent = document.getItem(key)
    if(!savedContent){
        alert("insert your fucking name!")
    }else{
        textField.value = ""
        localStorage.removeItem(key)
    }
})


