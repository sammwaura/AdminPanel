var addBtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function() {
    modal.classList.add("active");
}

closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("active");
}); 
