let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector(',navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}


// Contact Form Validation
document.getElementById("contact").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (!name || !email || !message) {
    feedback.innerText = "❌ Please fill out all fields.";
    feedback.style.color = "red";
  } else {
    feedback.innerText = " Message sent successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});


