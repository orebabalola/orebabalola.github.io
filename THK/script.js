document.getElementById("toggleMission")?.addEventListener("click", function() {
  const mission = document.getElementById("missionText");
  if (mission.style.display === "none") {
    mission.style.display = "block";
  } else {
    mission.style.display = "none";
  }
});
