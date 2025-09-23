function scrollToAbout(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    let progress = bar.getAttribute("data-progress");
    bar.style.width = progress + "%";
  });
});

document.querySelector('#home').innerHTML;