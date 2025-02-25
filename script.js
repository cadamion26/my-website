document.getElementById('contact-btn').addEventListener('click', function() {
    const emailDisplay = document.getElementById('email-display');
    if (emailDisplay.style.display === 'none') {
        emailDisplay.style.display = 'block';
    } else {
        emailDisplay.style.display = 'none';
    }
});
