let startTime, endTime;

// Function to capture the start time when form is loaded
window.onload = function() {
    const firstInput = document.getElementById("userFirstName");
    firstInput.addEventListener('focus', startTimer);

    const form = document.getElementById("form");
    form.addEventListener('submit', saveFormData);
};

// Start timer when user focuses on the first input field
function startTimer() {
    startTime = new Date();
}

// Function to capture end time and save form data to a .txt file
function saveFormData(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Capture end time and calculate time taken
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    document.getElementById('timeTaken').value = timeTaken;

    // Collect form data
    const firstName = document.getElementById('userFirstName').value;
    const lastName = document.getElementById('userLastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const passport = document.getElementById('passport').value;

    // Create the content to be saved
    const formData = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPassport/EID Number: ${passport}\nTime Taken: ${timeTaken} seconds`;

    // Create a Blob and save it as a text file using FileSaver.js
    const blob = new Blob([formData], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "formData.txt");
}
