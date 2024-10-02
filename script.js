const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const visitBtn = document.querySelector('.visit-btn');
const downloadCV = document.querySelector('#download-cv');
const contactBtn = document.querySelector('#contact-btn');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function visit(){
    window.location.href = "https://github.com/sainathmachha/";
}

visitBtn.onclick = visit;

function download(){
    const link = document.createElement('a'); // Create a temporary link element
    link.href = './portfolio/static/ResumeSainathMachha.pdf'; // Set the URL of the file
    link.download = 'ResumeSainathMachha.pdf'; // Set the name for the downloaded file
    document.body.appendChild(link); // Append the link to the body (not visible)
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link after downloading
}

downloadCV.onclick = download;

function composeEmail() {
    const mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=courageouscoderr@gmail.com&su=Contact&body=Hello I\'m interested in contacting you...';
    window.location.href = mailtoLink;
}

// Attach the function to the button's click event
contactBtn.onclick = composeEmail

function visitLinkedIn(){
    window.location.href = "https:/www.linkedin.com/in/sainath-machha";
}
function visitLeetcode(){
    window.location.href = "https://leetcode.com/u/sainathmachha1143/";
}

function contactMe() {
    // Get the text from the textarea with the class 'textArea'
    const editText = document.querySelector('.textArea');
    
    // Ensure editText is not null
    if (!editText) {
        console.error('Text area not found.');
        return;
    }

    // Get the text value from the textarea
    let text = editText.value; // Use .value to get the content of the textarea

    // Encode the text for URL
    const encodedText = encodeURIComponent(text);

    // Create the mailto link with the subject and body
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=courageouscoderr@gmail.com&su=Contact&body=${encodedText}`;

    // Open the mail client with the generated link
    window.location.href = mailtoLink;
}