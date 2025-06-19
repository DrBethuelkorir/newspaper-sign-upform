const submit = document.getElementById("submit");
const lastText = document.querySelector(".last-text");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const closeMessage = document.getElementById("closeMessage");
const emailValue = document.querySelector(".email input[type='email']");
const youemaildisplay = document.querySelector(".yourEmail");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submit.addEventListener("click", () => {
    if (emailPattern.test(emailValue.value)) {
        lastText.style.display = "flex";
        container.style.display = "none";
        wrapper.style.display = "none";
        youemaildisplay.textContent = emailValue.value;
        emailValue.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});
closeMessage.addEventListener("click", () => {
    lastText.style.display = "none";
    container.style.display = "flex";
    wrapper.style.display = "flex";
})
