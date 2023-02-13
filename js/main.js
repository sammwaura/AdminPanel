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
var picUrl;

registerForm.onsubmit = function(e){
    e.preventDefault();
    getDataFromLocal();
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
        prodPic : picUrl == undefined ? "images/default.jpg" : picUrl
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
    swal("Good job!", "Registration Success!", "success");
}


// retrive data from local storage 

var tableData = document.querySelector("#table-data");
const getDataFromLocal = () =>{
    tableData.innerHTML += "";
    userData.forEach((data,index)=>{
        tableData.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${data.id}</td>
            <td><img src = ${data.prodPic} width="40"></td>
            <td>${data.name}</td>
            <td>${data.quantity}</td>
            <td>
                <button><i class="fa fa-eye"></i></button>
                <button class="del-btn" style="background-color: burlywood;"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
        `;
    });

    // delete code
    var i;
    var allDelBtn = document.querySelectorAll(".del-btn");
    for (i=0;i<allDelBtn.length;i++){
        allDelBtn[i].onclick = function(){
            var tr = this.parentElement.parentElement;
            var id = tr.getAttribute("index");
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this product!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    userData.splice(id,1);
                    localStorage.setItem("userData", JSON.stringify(userData));
                    tr.remove();
                  swal("Poof! Your product has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your product is safe!");
                }
              });

        }
    }


}

getDataFromLocal();




// image processing

var product_pic = document.querySelector("#product-pic");
var uploadField = document.querySelector("#upload-field");
uploadField.onchange = function (){
    if(uploadField.files[0].size < 1000000){

        var fReader = new FileReader();
        fReader.onload = function(e){
            picUrl = e.target.result;
            product_pic.src = picUrl;
            console.log(picUrl);
        }
        fReader.readAsDataURL(product_pic.files[0]);
    } else {
        alert("File Size is too big");
    }
}


