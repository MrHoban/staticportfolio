// Interactive Skill Icons
const skillIcons = document.querySelectorAll('#skills ul li i');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Form Submission Thank You Pop-Up
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevent actual form submission for now

    // Display a Thank You Alert
    alert('Thank you for reaching out! I will get back to you soon.');

    // Optionally clear the form fields after submission
    contactForm.reset();
});

// Set Original Colors for Skill Icons
const skillColors = {
    html5: '#e34c26',
    css3: '#1572b6',
    javascript: '#f7df1e',
    react: '#61dafb',
    nodejs: '#339933',
    python: '#3776ab',
    jupyter: '#f37626',
    mysql: '#00758f'
};

const skillsList = document.querySelectorAll('#skills ul li');

skillsList.forEach(skill => {
    const skillType = skill.classList[0]; // Use class name to determine skill type
    if (skillColors[skillType]) {
        skill.querySelector('i').style.color = skillColors[skillType];
    }
});
