// Safe DOM hookup after page loads
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleMission");
  const box = document.getElementById("missionText");
  if (btn && box) {
    btn.addEventListener("click", () => {
      box.style.display = (box.style.display === "none") ? "block" : "none";
    });
  }
});

