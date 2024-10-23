let btn = document.querySelector("button");
let textArea = document.getElementById("text_area");
let color = document.getElementById("color");
let notesContainer = document.getElementById("notes_container");
let ClearAll = document.getElementById("clearAll");
let message = document.getElementById("message");

btn.addEventListener('click', addNotes)
function addNotes(){
    if(textArea.value == ""){
        alert("Please enter some text");
        return;
    }
    if(notesContainer.children.length > 0){
        message.style.display = "none";
    }

    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    

    div.appendChild(p);
    div.appendChild(cross_btn);
    
    cross_btn.innerText = 'X';
    p.innerText = textArea.value;
   
    div.style.backgroundColor=color.value;
    if(color.value === "#000000"){
        p.style.color = "white";
    }

    notesContainer.appendChild(div);
    textArea.value = "";

    cross_btn.addEventListener("click", function(){
        div.remove();
        if(notesContainer.children.length === 0){
            message.style.display="block";
        }
    })
}


ClearAll.addEventListener('click', function(){
    while (notesContainer.firstChild) {
        notesContainer.removeChild(notesContainer.firstChild);
    }
    message.style.display="block";
})