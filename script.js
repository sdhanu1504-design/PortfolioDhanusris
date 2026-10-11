const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.style.display = "block";
    successMessage.innerHTML = "✅ Message sent successfully! Thank you for contacting me.";

    contactForm.reset();

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);
});