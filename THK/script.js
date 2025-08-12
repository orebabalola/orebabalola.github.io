function toggleMission() {
  const mission = document.getElementById("mission-text");
  mission.style.visibility = (mission.style.visibility === "hidden") ? "visible" : "hidden";
}

let count = 0;
function increaseCount() {
  count++;
  document.getElementById("count-display").textContent = count;
}
