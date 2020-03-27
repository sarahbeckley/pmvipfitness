const navbar = document.querySelector("#main-nav");

// Change color and opacity on navbar when scrolling
window.addEventListener("scroll", function() {
  if (this.window.scrollY > 150) {
    document.querySelector("#main-nav").style.opacity = "0.9";
    document.querySelector("#main-nav").style.background = "#000";
  } else {
    document.querySelector("#main-nav").style.opacity = "1";
    document.querySelector("#main-nav").style.background = "#059418";
  }
});

// Smooth Scrolling
$("#main-nav a, btn").on("click", function() {
  if (this.hash == "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
