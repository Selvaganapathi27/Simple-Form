let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let msg = document.querySelector("#msg");
let btn = document.querySelector("#btn");

function validate () {
    if (fname.value === '' || fname.value.length <= 2) {
        alert("enter first name");
    }

    else if (lname.value === '' || lname.value.length <= 2) {
        alert("enter first name");
    }

    else if (email.value === '' || email.value.length <= 2) {
        alert("enter first name");
    }

    else if (msg.value === '' ){
        alert('enter the message')
    }
}



btn.addEventListener('click', validate);
