const togglebtn = document.getElementById('toggleButton');
const bulbColor = document.getElementById('bulb');
const status_on_off = document.getElementById('status');

function changeBgBlack(color){
    document.body.style.backgroundColor = color;
}

togglebtn.addEventListener('click', () => {
    if (bulbColor.style.backgroundColor === 'yellow') {
        bulbColor.style.backgroundColor = '#95a5a6';
    } else {
        bulbColor.style.backgroundColor = 'yellow';
    }
    
    const bg = document.body.style.backgroundColor;
    if (!bg || bg == 'white') {
        changeBgBlack('black');
        document.body.style.color = 'white';
        status_on_off.innerText = 'Status: On';

    } else {
        changeBgBlack('White');
        document.body.style.color = 'black';
        status_on_off.innerText = 'Status: Off';
    }
    if(togglebtn.innerText === 'Turn On'){
        togglebtn.innerText = 'Turn Off';
    }
    else{
        togglebtn.innerText = 'Turn On';
    }
})

