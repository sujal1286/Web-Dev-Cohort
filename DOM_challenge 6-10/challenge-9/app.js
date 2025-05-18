const toggleButton = document.getElementById("toggle");
const panel = document.querySelector('.panel');
const closePanel = document.querySelector('.close-btn'); 

toggleButton.addEventListener('click', () =>{
    panel.classList.toggle("active");
})

closePanel.addEventListener('click', () => {
    panel.classList.toggle("active");
})