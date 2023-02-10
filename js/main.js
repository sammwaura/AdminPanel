var addBtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon");

addBtn.onclick = function() {
    modal.classList.add("active");
}

closeBtn.addEventListener("click", ()=>{
    modal.classList.remove("active");
}); 

var registerBtn = document.querySelector("#register-btn");
var userData = [];
var idProd = document.getElementById("id");
var nameProd = document.querySelector("#name");
var quantityProd = document.querySelector("#quantity");

registerBtn.addEventListener("click", ()=>{
    registerData();
})

function registerData(){
    userData.push({
        id : idProd.value,
        name : nameProd.value,
        quantity : quantityProd.value
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
}
