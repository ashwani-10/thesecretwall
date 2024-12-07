document.getElementById("add-button").addEventListener("click", function () {
    document.querySelector(".add-form").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".add-form").style.display = "none";
});

const form = document.getElementById('myForm');
const formdiv = document.getElementById('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent default form submission behavior

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Hide the form after successful submission
            formdiv.style.display = 'none';
            form.reset();

            alert('Form submitted successfully!'); // Optional message

        } else {
            alert('Something went wrong!');
        }
    } catch (error) {
        alert('Error: ' + error.message);  // Handle any fetch errors
    }
});