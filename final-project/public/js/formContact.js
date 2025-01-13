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
        appointmentDate: document.getElementById('appointmentDate').value, 
        message: document.getElementById('message').value,
    };

    //Sending email using EmailJS
    emailjs.send('service_4io1hjs', 'contact_form', formData)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        displayMessage('Your message has been sent successfully!', 'success');
    }, (error) => {
        console.log('FAILED...', error); 
        displayMessage('Failed to send your message. Please try again.', 'error');
    });
});

    //Function to display messages
    function displayMessage(message, type) {
        const messageContainer = document.getElementById('messageContainer'); 
        const messageElement = document.createElement('div'); 
        messageElement.textContent = message; 
        messageElement.classList.add(type === 'success' ? 'success-message' : 'error-message'); 
        messageContainer.innerHTML = ''; // Clear previous messages 
        messageContainer.appendChild(messageElement);

    }


