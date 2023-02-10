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
// var imgUrl;

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
        quantity : quantityProd.value
        // IMg : imgUrl == undefined ? "images/loafers.jpg" : imgUrl
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
}
var tableData = document.querySelector("#table-data");
const getDataFromLocal = () =>{
    userData.forEach((data, index)=>{
        tableData.innerHTML = `
                        <tr>
                                    <td>Prod num</td>
                                    <td>Prod num</td>
                                    <td>Prod num</td>
                                    <td>Prod num</td>
                                    <td>
                                        <button><i class="fa fa-eye"></i></button>
                                        <button  style="background-color: burlywood;"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                                 `;
    });
}

getDataFromLocal();
