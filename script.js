// Function to display email when button is clicked
const emailButton = document.getElementById('email-button');
const emailDisplay = document.getElementById('email-display');

// Initially hide the email
emailDisplay.style.display = 'none';

emailButton.addEventListener('click', () => {
    if (emailDisplay.style.display === 'none') {
        emailDisplay.textContent = 'cadamionh@gmail.com';
        emailDisplay.style.display = 'block'; // Show the email
    } else {
        emailDisplay.style.display = 'none'; // Hide the email
    }
});

// Sticky Header Effect
window.onscroll = function() {
    stickyHeader();
};

const header = document.getElementById('header');
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Toggle Project Details on button click
const expandButtons = document.querySelectorAll('.expand-button');
expandButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const projectCard = e.target.closest('.project-card');
        const projectDetails = projectCard.querySelector('.project-details');
        
        if (projectDetails.style.display === 'block') {
            projectDetails.style.display = 'none';
            e.target.textContent = 'Learn More';
        } else {
            projectDetails.style.display = 'block';
            e.target.textContent = 'Show Less';
        }
    });
});