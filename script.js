var overlay=document.querySelector(".overlay");
var popupbox=document.querySelector(".popupbox");
var plus=document.getElementById("add-popup-button");
plus.addEventListener("click",function(){
    overlay.style.display="block";
    popupbox.style.display="block";
    

})
var cancel=document.getElementById("cancelbook")
cancel.addEventListener("click",function(event)
{
    event.preventDefault();
     overlay.style.display="none";
    popupbox.style.display="none";
})
var book=document.getElementById("book-tittle-input")
var author=document.getElementById("book-author-input")
var des=document.getElementById("book-description")
var add=document.getElementById("addbook")
var container=document.querySelector(".container");
var del=document.getElementById("del")
var bookcon=document.querySelector(".book-container")
add.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${book.value}</h2>
            <h5>${author.value}</h5>
           
            <p>${des.value}</p>
            <button>delete</button>`
    container.append(div)
    overlay.style.display="none";
    popupbox.style.display="none";
})
container.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "delete") {
    e.target.parentElement.remove();
  }
});
