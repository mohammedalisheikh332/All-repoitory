// app.js
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    // Generate the resume
    const resumeOutput = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById('resume-output').innerHTML = resumeOutput;
});





