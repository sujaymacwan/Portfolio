/*  AOS animation library init  */
AOS.init({
  duration: 600,
  once: true,
});

/*  Auto-update footer year  */
document.getElementById("year").textContent = new Date().getFullYear();

/*  Optional: open/close overlay on tap for mobile users.
    Will toggle a class that keeps overlay fully open.
*/
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    if (window.matchMedia("(hover:none)").matches) {
      card.classList.toggle("open");
    }
  });
});
