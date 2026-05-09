function goToContact() {
    window.location.href = "contact.html";
}

/* typing animation */
const text = "CSE Student | Web Developer | UI Designer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
window.onload = typing;

/* scroll animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
});

document.querySelectorAll(".glass").forEach(el => observer.observe(el));