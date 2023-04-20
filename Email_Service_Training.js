//alert("This is an alarm!");

// FUNKTIONS
let form;
document.addEventListener("DOMContentLoaded", function() {
    form = document.getElementById("form1");
})

function validateFormFunction(){
    const isValid = form.checkValidity();
    form.reportValidity();
    return isValid;
}
