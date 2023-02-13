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
var registerForm = document.querySelector("#register-form");
var prodPic;

registerBtn.onclick = function(e){
    e.preventDefault();
    registerData();
    registerForm.reset('');
    closeBtn.click();
}

if (localStorage.getItem("userData") != null){
    userData = JSON.parse(localStorage.getItem("userData"));
}

function registerData(){
    userData.push({
        id : idProd.value,
        name : nameProd.value,
        quantity : quantityProd.value,
        prodPic : "images/loafers.jpg"
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
}
// retrive data from local storage 

var tableData = document.querySelector("#table-data");
const getDataFromLocal = () =>{
    // tableData.innerHTML = "";
    userData.forEach((data,index)=>{
        tableData.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${data.id}</td>
            <td><img src = ${data.prodPic} width="40" height="40"></td>
            <td>${data.name}</td>
            <td>${data.quantity}</td>
            <td>
                <button><i class="fa fa-eye"></i></button>
                <button  style="background-color: burlywood;"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        
        `;
    });
}
getDataFromLocal();

                                
