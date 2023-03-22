// Get the modal 
var modal = document.getElementById("myModal"); 
 
// Get the buttons that open and close the modal 
var btn1 = document.getElementById("openModalJs");
var btn2 = document.getElementById("openModalJs2");
var closeBtn = document.getElementById("closeModalJs");
 
// Function to open the modal 
function openModal() {
  modal.style.display = "block";
}
 
// Function to close the modal 
function closeModal() {
  modal.style.display = "none";
}
 
// Event listeners for opening the modal 
btn1.onclick = function() { 
  openModal(); 
}

btn2.onclick = function() { 
  openModal(); 
}
 
// Event listener for closing the modal 
closeBtn.onclick = function() { 
  closeModal(); 
}
 
// Event listener for clicking outside the modal to close it 
window.onclick = function(event) { 
  if (event.target == modal) { 
    closeModal(); 
  } 
}