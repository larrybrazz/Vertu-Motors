// Get element from the index page
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-link")
const body = document.querySelector('body');

// Add a click event listener to the menu icon to display the menu
menuIcon.addEventListener("click", () => {
  // Add active class on the menu icon
  menu.classList.add("active");
  // Add menu-open class on the body to prevent scrolling
    body.classList.add("menu-open");
  // Add show
    menuItems.classList.add("show")
});

// Add a click event listener to the menu-close icon to close the menu
menuClose.addEventListener("click", () => {
  menu.classList.remove("active");
 body.classList.remove("menu-open");
});


// Redirect to the login page on click and menu Item pages
const loginIcon = document.querySelector(".loginIcon");
loginIcon.addEventListener("click", () => {
    window.location.href = "login.html"
})

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Working");

    // Redirect to menuItems.html
    window.location.href = "menuItems.html";
  });
});

