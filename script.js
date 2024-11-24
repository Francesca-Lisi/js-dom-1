const bottone = document.getElementById('btn-toggle')
const target = document.getElementById('whiteLamp')
const target2 = document.getElementById('yellowLamp')



const msgOn = 'Accendi';
const msgOff = 'Spegni';

bottone.innerHTML = msgOn; // assegno un testo di default al innerHtml del bototne

bottone.addEventListener('click', () => {
target.classList.toggle('hide');
bottone.innerHTML = target.classList.contains('hide') ? msgOn : msgOff
target2.classList.toggle('show');
})
