const password = document.getElementById("password");
const confirmation = document.getElementById("confirm");
const myButton = document.getElementById("submit")

let invalid = document.createElement('div');
let contents = document.createTextNode('*Passwords do not match!')
invalid.style.width = "140px";
invalid.style.color = "red";
invalid.appendChild(contents);



function confirmPassword() {
    if(password.value != confirmation.value) {
        console.log('wrong');
        myButton.disabled = true;
        document.getElementById("fun").appendChild(invalid);
        return false;
    } else {
        console.log('correct')
        document.getElementById("fun").removeChild(invalid);
        myButton.disabled = false;
        return true;
    }
}

confirmation.addEventListener('keyup', function(e) {
    confirmPassword();
})

password.addEventListener('keyup', function(e) {
    confirmPassword();
})

