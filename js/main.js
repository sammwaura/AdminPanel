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
var prodId = document.getElementById("id");
var prodName = document.getElementById("#name");
var prodQuantity = document.getElementById("#quantity");

registerBtn.onclick = function(){
    alert("registered!");
    registerData();
}

function registerData(){
    userData.push({
        id : prodId.value,
        name : prodName.value,
        quantity : prodQuantity,
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
}
