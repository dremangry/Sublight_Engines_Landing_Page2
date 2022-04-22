
    // HAMBURGER MENU FUNCTION
$(document).ready(function () {

    $('#toggle').on("click", function () {
        $('.accion').fadeToggle();
    })

})



// --------------------FORM VALIDATION LOGIC-----------------

const form = document.getElementById('formValidation')
const dName = document.getElementById('name')
const email = document.getElementById('email')
const tel = document.getElementById('request_phone')
const language = document.getElementById('language')
const message = document.querySelector('.feedback')
const btn = document.getElementById('jsTest');

// #1 event listener if submitted call function processFormData
form.addEventListener('submit', processFormData);

function processFormData(e) {
    e.preventDefault();
    
    // ----------------------- EMAILJS LOGIC--------------------
    btn.value = 'Sending...';

    const serviceID = 'service_5fl31ph';
    const templateID = 'template_0ansyop';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        // alert('Sent!');
        console.log('successfully sent');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
    // -------------------------------------------


    // #2 function that validate the form
    validateForm()
    
    // #3 submit data if valid
    if(isValid) {
        storeFormData()
    }
}

// by default the form is invalid   
let isValid = false

function validateForm() {
    // using the default variable with the checkValidity method if all good it display true else false
    isValid = form.checkValidity()
    console.log(isValid);

    if (isValid) {
        message.style.display ='block';
    }
}

// store the information of the form
function storeFormData() {
    const user = {
        name: form.name.value,
        email: form.email.value,
        telephone: form.telephone.value,
        language: form.language.value
    }
    // do something with user data (for now we log)
    console.log(user);
}
























