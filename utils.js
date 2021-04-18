// Info Button
let openInfo = document.getElementById("info");
let infoModal = document.getElementById("infoModal");
let closeInfo = document.getElementById("close-info");
let openIndividual = document.getElementsByClassName("solo-clasif-wrapper")[0];
let tableModal = document.getElementById("tableModal");
let closeIndividual = document.getElementById("close-individual");

// Click Info Button Event
openInfo.onclick = function() {
  infoModal.style.display = "block";
} 

// Info Close Button
closeInfo.onclick = function() {
  infoModal.style.display = "none";
} 

// Click Individual Button Event
openIndividual.onclick = function() {
  tableModal.style.display = "block";
} 

// Individual Close Button
closeIndividual.onclick = function() {
  tableModal.style.display = "none";
} 



window.onclick = function(event) {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
  } else if (event.target == tableModal) {
    tableModal.style.display = "none";
  }
}