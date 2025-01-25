document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
// Initialize EmailJS with your User ID
emailjs.init("bAq4zzWRNF81M2rdF");

// Get the form element
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response');

// Form submission event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email via EmailJS
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send('service_m564i6n', 'template_f7ro23i', templateParams)
        .then(function(response) {
            responseMessage.innerHTML = "Thank you for your feedback!";
            form.reset(); // Reset the form
        }, function(error) {
            responseMessage.innerHTML = "There was an error sending your message. Please try again later.";
        });
});

