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
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Add Content-Type header
            },
            body: JSON.stringify(data),
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


// Translation object
const translations = [
    "यह दीवार सुनती है, लेकिन क्या आपने बोलने की हिम्मत की है ?", // Hindi
    "ई देवाल सुनत बा, बाकिर का रउरा बोले के हिम्मत कइले बानी ?", // Bhojpuri
    "This wall listens, but have you dared to speakOut ?" // English
];

// Get elements
const sloganText = document.getElementById("hero-slogan");

let currentIndex = 0;

// Event listener for language change
function updateSlogan(){
    sloganText.textContent = translations[currentIndex];
    currentIndex = (currentIndex + 1) % translations.length;
}

setInterval(updateSlogan,5000);
