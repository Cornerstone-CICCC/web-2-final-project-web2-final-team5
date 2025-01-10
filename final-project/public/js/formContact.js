document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {
            from: {
                email: 'mariajosemejiacalvo@gmail.com',
                name: formData.get('first-name') + ' ' + formData.get('last-name'),
            },
            to: [
                {
                    email: 'mcvef2013@gmail.com'
                }
            ],
            subject: 'New Contact Form Submission',
            html: 
            `
            <p>Name: ${formData.get('first-name')} ${formData.get('last-name')}</p>
            <p>Phone: ${formData.get('phone')}</p>
            <p>Service: ${formData.get('services')}</p>
            <p>Service: ${formData.get('services')}</p>
            <p>Message: ${formData.get('message')}</p>
            `
        };

        try {
            const response = await fetch('https://api.mailersend.com/v1/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer mlsn.9f942d286ec68a14ec7c45aa7a47a15a03ccb5c50cb3f1736af5d5d7a9631a43`
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error); 
            alert('An error occurred. Please try again later.');
        }
    })
})