function playSound(AudioId) {
    const audioElement = document.querySelector(AudioId);

    if (audioElement && audioElement.localName === 'audio') {
        audioElement.play();
    } else {
        alert("Elemento áudio não encontrado ou seletor inválido.")
    }
}

const keyList = document.querySelectorAll('.tecla');

for(let i = 0; i < keyList.length; i++) {

    const key = keyList[i];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`;

    key.onclick = function() {
        playSound(idAudio);
    }
    console.log(idAudio);

    
    key.onkeydown = function(event) {
        if (event.key == 'a') {
            key.classList.add('ativa');
        }
        console.log(event.key);
    }
    key.onkeyup = function() {
        key.classList.remove('ativa');
    }
}