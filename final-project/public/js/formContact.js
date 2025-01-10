//user id from Email JS
emailjs.init('Bck0hJ4i3TNFoP7N2');

//form element
const contactForm = document.getElementById('contactForm');

//form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //Collect data from contactForm
    var formData = {
        firstName: document.getElementById('first-name').value, 
        lastName: document.getElementById('last-name').value, 
        phone: document.getElementById('phone').value, 
        email: document.getElementById('email').value, 
        service: document.getElementById('services').value, 
        appointmentDate: document.getElementById('appointmentDate').value, message: document.getElementById('message').value,
    };

    //Sending email using EmailJS
    emailjs.send('service_4io1hjs', 'contact_form', formData)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
    }, (error) => {
        console.log('FAILED...', error); 
        alert('Failed to send your message. Please try again.');
    });
});