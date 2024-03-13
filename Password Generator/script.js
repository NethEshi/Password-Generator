const empty = " ";
const Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lcase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const Symbol = "!@#$%^&*=-_?<>";

const Plength = document.getElementById("p-length");
const UpperCase = document.getElementById("p-uppercase");
const LowerCase = document.getElementById("p-lowercase");
const Pnumber = document.getElementById("p-number");
const Psymbol = document.getElementById("p-symbol");
const Submit = document.getElementById("submit");
const Password = document.getElementById("Password");

Submit.addEventListener("click", () => {
    let initialPassword = "";
    if (UpperCase.checked) {
        initialPassword += Ucase;
    }
    if (LowerCase.checked) {
        initialPassword += Lcase;
    }
    if (Pnumber.checked) {
        initialPassword += Number;
    }
    if (Psymbol.checked) {
        initialPassword += Symbol;
    }
    Password.value = generatePassword(Plength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}

//copy password to clipboard

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (Password.value == "") {
        alert("Please create a password!");
    } else {
        Password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard");
    }
});
