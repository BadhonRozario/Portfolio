// ===============================
// NORMAL SKILL CIRCLES
// ===============================
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const progress = circle.querySelector("circle:nth-child(2)");
    const number = circle.querySelector(".number");

    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    let count = 0;

    const animate = () => {
        if (count <= percent) {
            number.innerText = count + "%";
            progress.style.strokeDashoffset =
                circumference - (circumference * count) / 100;
            count++;
            requestAnimationFrame(animate);
        }
    };

    animate();
});

// ===============================
// UI/UX SPECIAL SPLIT CIRCLE
// ===============================
const uiuxCircle = document.querySelector(".uiux-circle");

if (uiuxCircle) {
    const percent = uiuxCircle.getAttribute("data-percent");
    const progress = uiuxCircle.querySelector("circle:nth-child(2)");
    const number = uiuxCircle.querySelector(".uiux-number");

    const radius = 75;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    let count = 0;

    const animateUIUX = () => {
        if (count <= percent) {
            number.innerText = count + "%";
            progress.style.strokeDashoffset =
                circumference - (circumference * count) / 100;
            count++;
            requestAnimationFrame(animateUIUX);
        }
    };

    animateUIUX();
}