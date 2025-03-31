document.getElementById('redButton').addEventListener('click', () => {
    document.getElementById('mainHeading').style.color = 'red';
    document.querySelector('p').style.color = 'red';
});
document.getElementById('greenButton').addEventListener('click', () => {
    document.getElementById('mainHeading').style.color = 'green';
    document.querySelector('p').style.color = 'green';
});
document.getElementById('blueButton').addEventListener('click', () => {
    document.getElementById('mainHeading').style.color = 'blue';
    document.querySelector('p').style.color = 'blue';
});
document.getElementById('purpleButton').addEventListener('click', () => {
    document.getElementById('mainHeading').style.color = 'purple';
    document.querySelector('p').style.color = 'purple';
});
document.getElementById('resetButton').addEventListener('click', () => {
    document.getElementById('mainHeading').style.color = '';
    document.querySelector('p').style.color = ''; 
});
