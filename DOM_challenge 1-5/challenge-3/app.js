const name_Input = document.getElementById('nameInput');
const job_Input = document.getElementById('jobInput');
const age_Input = document.getElementById('ageInput');
const bio_Input = document.getElementById('bioInput');

const name_Display = document.getElementById('nameDisplay');
const job_Display = document.getElementById('jobDisplay');
const age_Display = document.getElementById('ageDisplay');
const bio_Display = document.getElementById('bioDisplay');

name_Input.addEventListener('input', () => {
    name_Display.textContent = name_Input.value;
});
  
job_Input.addEventListener('input', () => {
    job_Display.textContent = job_Input.value;
}); 
age_Input.addEventListener('input', () => {
    age_Display.textContent = age_Input.value;
});
bio_Input.addEventListener('input', () => {
    bio_Display.textContent = bio_Input.value;
});