const now = new Date();

const todayDate = document.getElementById("today-date");
const year = document.getElementById("year");

if (todayDate) {
  todayDate.textContent = `Market Note — ${now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`;
}

if (year) {
  year.textContent = String(now.getFullYear());
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for your inquiry! I will reach out within 1 business day.");
    form.reset();
  });
}
