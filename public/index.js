function sendMail() {
    console.log("sendMail() called");
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value  
    };

    emailjs.send("service_c6b1blw","template_6ji6c7m", params)
    .then((response) => {
       document.getElementById("success_message").style.display = "block";
       document.getElementById("from_name").value = "";
       document.getElementById("email_id").value = "";
       document.getElementById("message").value = "";
    }).catch((error) => {
        alert("Failed to send email!");
    });
}


function enableSubmit(){
let inputs = document.getElementsByClassName('required'); // Enter your class name for a required field, this should also be reflected within your form fields.
let btn = document.getElementById('send_button');
let isValid = true;
for (var i = 0; i < inputs.length; i++){
let changedInput = inputs[i];
if (changedInput.value.trim() === "" || changedInput.value === null){
isValid = false;
break;
}
}
btn.disabled = !isValid;
}

function closeMobileMenu() {
    document.getElementById("mobile-menu").style.display = "none";
}
