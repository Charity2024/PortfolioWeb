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


const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    toggleBtn.innerHTML = '🌞';
  } else {
    toggleBtn.innerHTML = '🌙';
  }
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}


