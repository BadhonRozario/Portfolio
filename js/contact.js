
// =========================
// EMAILJS INIT
// =========================

(function () {
    emailjs.init("jxp3nb-XNsXSN7lvE"); 
})();


// =========================
// FORM HANDLER
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector("button");
        const originalText = btn.innerText;

        btn.innerText = "Sending...";
        btn.disabled = true;

        emailjs.sendForm(
            "service_4957qdv",
            "template_uh78n4d",
            this
        ).then(function () {

            alert("Message sent successfully 🚀");

            contactForm.reset();

            btn.innerText = originalText;
            btn.disabled = false;

        }, function (error) {

            alert("Failed to send message ❌");
            console.log(error);

            btn.innerText = originalText;
            btn.disabled = false;
        });

    });

}