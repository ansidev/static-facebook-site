function checkLoginForm(form) {
    //check if email is empty or valid
    if (this.email.value === "") {
        this.alert('Please enter your email!');
        this.email.focus();
        return false;
    } else {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.email.value)) {
            alert('Please enter a valid email address!');
            this.email.focus();
            return false;
        }
    }

    //check if password is empty
    if (this.pass.value === "") {
        alert("Please enter your password!");
        this.pass.focus();
        return false;
    }
}

function border_red(x) {
    x.style.borderColor = 'red';
}

function border_white(x) {
    x.style.borderColor = 'white';
}

function checkFirstName(firstName) {
    var filter = /^[A-Za-z\s]+$/;
    if ($('#first_name').value === "") {
        if (!filter.test(firstName.value)) {
            border_red(firstName);
            alert('Please enter a valid firstname!');
            firstName.focus();
            return false;
        } else {
            border_white(firstName);
        }
    }
    else {
        alert('Please enter a firstname!');
    }
}

function checkLastName(lastName) {
    var filter = /^[A-Za-z\s]+$/;
    if (!filter.test(lastName.value)) {
        border_red(lastName);
        alert('Please enter a valid lastname!');
        lastName.focus();
        return false;
    } else {
        border_white(lastName);
    }
}

function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        border_red(email);
        alert('Please enter a valid email address!');
        this.focus();
        return false;
    } else {
        border_white(email);
        return true;
    }
}

function isEmailMatch() {
    var regEmail = document.getElementById("reg_email").value;
    var regEmailConf = document.getElementById("reg_email_confirm").value;
    if (!checkEmail(document.getElementById("reg_email"))) {
        return false;
    } else if (regEmailConf === "") {
        border_red(document.getElementById("reg_email_confirm"));
        document.getElementById("reg_email_confirm").focus();
        alert('Please enter confirm email!');
        return false;
    } else if (checkEmail(document.getElementById("reg_email_confirm")) === false) {
        return false;
    } else if (regEmailConf !== regEmail) {
        border_red(document.getElementById("reg_email_confirm"));
        document.getElementById("reg_email_confirm").focus();
        alert('Confirm email does not matches!');
        return false;
    } else {
        border_white(document.getElementById("reg_email_confirm"));
        return true;
    }
}

function checkPassword() {
    var regPass = document.getElementById("reg_pass");
    var filter = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    alert(regPass.value + ' and ' + filter.test(regPass.value));
    if (!filter.test(regPass.value)) {
        border_red(regPass);
        alert('Your password must be between 6 and 30 characters long, contains letters, numbers, special characters, and does not contain space character!');
        regPass.focus();
        return false;
    } else {
        border_white(regPass);
        return true;
    }
}

function checkRegForm(form) {
    //    Make quick references to our fields
    //    var firstname = document.getElementById('firstname');
    //    var addr = document.getElementById('addr');
    //    var zip = document.getElementById('zip');
    //    var state = document.getElementById('state');
    //    var username = document.getElementById('username');
    //    var email = document.getElementById('email');

    // Check each input in the order that it appears in the form!
    if (isAlphabet(this.first_name, "Please enter only letters for your name")) {
        if (isAlphanumeric(addr, "Numbers and Letters Only for Address")) {
            if (isNumeric(zip, "Please enter a valid zip code")) {
                if (madeSelection(state, "Please Choose a State")) {
                    if (lengthRestriction(username, 6, 8)) {
                        if (emailValidator(email, "Please enter a valid email address")) {
                            return true;
                        }
                    }
                }
            }
        }
    }


    return false;

}