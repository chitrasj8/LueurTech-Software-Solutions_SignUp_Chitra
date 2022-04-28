var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#password');
var username = document.getElementById("#username");
var togglePassword1 = document.querySelector('#togglePassword1');
var conPassword = document.querySelector('#conPassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = conPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    conPassword.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

let parameters = {

    count: false,
    letters: false,
    numbers: false,
    special: false,
}

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker() {
    var pass = document.getElementById("password").value;
    parameters.letters = (/[A-Za-z]+/.test(pass)) ?
        true : false;
    parameters.numbers = (/[0-9]+/.test(pass)) ?
        true : false;
    parameters.special = (/[!\"$%&/()=?@~'\\.\';:+=^*_-]/.test(pass)) ? true : false;
    parameters.count = (pass.length > 7) ?
        true : false;

    let barLength = Object.values(parameters).filter(value => value);
    

    strengthBar.innerHTML = "";
    for (let i in barLength) {
        let span = document.createElement("span");
        span.classList.add("strength");
        console.log("strengthSpan", span);
        strengthBar.appendChild(span);
    }
    console.log("strengthBar", strengthBar)

    let spanRef = document.getElementsByClassName("strength");
    for (let i = 0; i < spanRef.length; i++) {

        switch (spanRef.length - 1) {

            case 0:
                spanRef[i].style.background = "red";
                msg.textContent = "Your password is very week";
                break;

            case 1:
                spanRef[i].style.background = "orange";
                msg.textContent = "Your password is  week";
                break;
            case 2:
                spanRef[i].style.background = "yellow";
                msg.textContent = "Your password is  good";
                break;

            case 3:
                spanRef[i].style.background = "green";
                msg.textContent = "Your password is  strong";

        }
    }
}


function onChange() {
    var pass = document.querySelector('input[name=passWord]');
    var conpass = document.querySelector('input[name=confirmedPassword]');
    if (conpass.value === pass.value) {
        conpass.setCustomValidity('');
    } else {
        conpass.setCustomValidity('Passwords do not match');
    }
}




function validateForm() {
    var fname = document.forms["myForm"]["fName"].value;
    var lname = document.forms["myForm"]["lName"].value;
    var usname = document.forms["myForm"]["userName"].value;
    var pass = document.forms["myForm"]["passWord"].value;
    var conpass = document.forms["myForm"]["confirmedPassword"].value;
    var email = document.forms["myForm"]["email"].value;
    var mob = document.forms["myForm"]["mobile"].value;
    if (fname == "" || lname == "" || usname == "" || pass == "" || conpass == "" || email == "" || mob == "") {
        alert("Must to fill the missing fields");
        return false;
    }
    else {
        alert("Successfully Saved");
    }
}