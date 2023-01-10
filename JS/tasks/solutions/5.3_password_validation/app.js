
function passwordValidation1(password) {
    if (password.length > 7) {
        console.log("Strong");
    }
    else {
        console.log("Weak");
    }
}

function passwordValidation2(password) {
    password.length > 7 ? console.log("Strong") : console.log("Weak");
}

function advancedPasswordValidation(password) {
    if (password.length > 7 && /[A-Z]/.test(password)) {
        console.log("Very Strong");
    }
    else if (password.length > 7) {
        console.log("Strong");
    }
    else {
        console.log("Weak");
    }
}