document.getElementById("add-button").addEventListener("click", function () {
    document.querySelector(".add-form").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".add-form").style.display = "none";
});
