// Login page validation
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to the home page or perform other actions
  } else {
    alert("Invalid username or password. Please try again.");
  }
});


// Got back to home page
const backToHome = document.querySelector(".backToHome");
backToHome.addEventListener("click", () => {
    window.location.href = "index.html"
})