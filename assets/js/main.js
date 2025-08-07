//  ── Initialise scroll-animations
AOS.init({ once: true, duration: 600 });

//  ── Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
