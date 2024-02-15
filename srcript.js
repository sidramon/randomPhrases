const characters = 'abcdefghijklmnopqrstuvwxyz';

// ----- Load fr dictionnary ----- //
let dictionnaryFr;

function loadDic() {
    const reader = new FileReader();

    reader.onload = function (e) {
        const contenu = e.target.result;
        dictionnaryFr = contenu.split('\n');
    };

    reader.readAsText("");
}
// ------------------------------ //
loadDic()

let phrase = "";
let loopRunning = false;

function startLoop() {
    if (!loopRunning) {
        loopRunning = true;
        phrase = ""
        loop();
        document.getElementById('startButton').innerText = 'Stop';
    } else {
        stopLoop();
        document.getElementById('startButton').innerText = 'Start';
    }
}

function loop() {
    const phraseContent = document.getElementById('phraseContent');
    phraseContent.innerText = phrase += " " + generateWord();

    if (loopRunning) {
        setTimeout(loop, 500);
    }
}

function stopLoop() {
    loopRunning = false;
}

function generateWord(){
    word = "";
    while(!dictionnaryFr.includes(word)){
        word = "";
        wordSize = Math.floor(Math.random() * 12)
        counter = 0;
        while (counter < wordSize) {
            word += characters.charAt(Math.floor(Math.random() * 26));
            counter += 1;
        }
    }

    return word
}