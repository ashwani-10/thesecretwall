//form visibility handling here

document.getElementById("add-button").addEventListener("click", function () {
  document.querySelector(".add-form").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".add-form").style.display = "none";
});

//Posting data to database here

const form = document.getElementById("myForm");
const formdiv = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Add Content-Type header
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Hide the form after successful submission
      formdiv.style.display = "none";
      form.reset();

      alert("Secret posted successfully!"); // Optional message
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    alert("Error: " + error.message); // Handle any fetch errors
  }
});

// Translating hero-slogan here

const translations = [
  "यह दीवार सुनती है, लेकिन क्या आपने बोलने की हिम्मत की है ?", // Hindi
  "This wall listens, but have you dared to speak ?", // English
];

// Get elements
const sloganText = document.getElementById("hero-slogan");

let currentIndex = 0;

// Event listener for language change
function updateSlogan() {
  sloganText.textContent = translations[currentIndex];
  currentIndex = (currentIndex + 1) % translations.length;
}

setInterval(updateSlogan, 5000);

//fetch secrets to the wall
function fetchSecrets (){
fetch("http://localhost:8080/allSecrets")
  .then((res) => {
    return res.json();
  })
  .then((data) => {

    const container = document.getElementById("data-container");

    data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("new-div")

        div.innerHTML = 
        `
        <h4>Anonymous-</h4>
        <p>${item.description}</p>
        `;
        container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error fetching data",error);
  });

}

fetchSecrets();
