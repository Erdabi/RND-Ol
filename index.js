const submitButton  = document.getElementById("submit")
const form  = document.getElementById("form")

function Validation() {


    const surName  = document.getElementById("surname").value
    const eMail  = document.getElementById("email").value
    const textField  = document.getElementById("textfield").value
    const firstname  = document.getElementById("name").value

    let emailValidation = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) 

    if (surName === "") {
        alert("surname isnt filled in")
    }
    else if (eMail === "") {
        alert("email isnt filled in")
    }
    else if (firstname === "") {
        alert("firstname isnt filled in")
    }
    else if (eMail.value.match(emailValidation) ) {
        alert("this is a valid email")
    }
    else {
        alert("everything is alright")
    }
    
}