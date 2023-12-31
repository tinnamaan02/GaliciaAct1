function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Emailjs form https://www.emailjs.com/ */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "tintin",
      "template_7949vtk",
      "#contact-form",
      "jEtsatNQF-FLJBevW"
    )
    .then(
      () => {
        contactMessage.textContent = "Sent!"; //if the message you want was sent

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Not Sent, Try Again."; //if there is wrong with the codes on line 16-19
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
