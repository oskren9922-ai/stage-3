//selecting display-popup,display-overlay,add-button
var displayoverlay = document.querySelector(".display-overlay")
var displaypopup = document.querySelector(".display-popup")
var addbutton = document.getElementById("add-button")

//making the happen
addbutton.addEventListener("click",function(){
    displayoverlay.style.display="block"
    displaypopup.style.display="block"
})

//selecting the popup buttons
var cancelpopup = document.getElementById("cancel-popup")
var addpopup = document.getElementById("add-popup")

//making it happen
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    displayoverlay.style.display="none"
    displaypopup.style.display="none"
}
)
//selecting the input and textarea and container
var displaypopupinput1 = document.getElementById("display-popup-input1")
var displaypopupinput2 = document.getElementById("display-popup-input2")
var displaypopuptextarea = document.getElementById("display-popup-textarea")
var container = document.querySelector(".container")

//making it happen
addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${displaypopupinput1.value}</h1>
                        <h2>${displaypopupinput2.value}</h2>
                        <p>${displaypopuptextarea.value}</p>
                        <button onclick="bookcontainerdelete(event)">Delete</button>`
    container.append(div)    
    displayoverlay.style.display="none"
    displaypopup.style.display="none"             
})

//making it happen
function bookcontainerdelete(event)
{
    event.target.parentElement.remove()
}






 