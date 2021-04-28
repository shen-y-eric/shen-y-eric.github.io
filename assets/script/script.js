let keys = document.querySelectorAll('.key')
let whiteKeys = document.querySelectorAll('.key.white')
let blackKeys = document.querySelectorAll('.key.black')
let WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k']
let BLACK_KEYS = ['w', 'e', 't', 'y', 'u']

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
    key.classList.add('active');
    note.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', e => {
    let key = e.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(key)
    let blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function setBackgroundColor(color) {
    document.querySelector(".piano-container").style.background = color;
    document.querySelector('.title').style.color = color;
}

function setColor(color) {
    document.querySelector('.header').style.background = color;
}

document.addEventListener("keydown", checkKeyPressed, false);

document.querySelector('.title').onclick = function() {
    document.querySelector('.description').classList.toggle('hidden');
}

function checkKeyPressed(evt) {
    if (evt.keyCode == "65") {
        CPress();
    }
    if (evt.keyCode == '87') {
        DbPress();
    }
    if (evt.keyCode == '83') {
        DPress();
    }
    if (evt.keyCode == '69') {
        EbPress();
    }
    if (evt.keyCode == '68') {
        EPress();
    }
    if (evt.keyCode == '70') {
        FPress();
    }
    if (evt.keyCode == '84') {
        GbPress();
    }
    if (evt.keyCode == '71') {
        GPress();
    }
    if (evt.keyCode == '89') {
        AbPress();
    }
    if (evt.keyCode == '72') {
        APress();
    }
    if (evt.keyCode == '85') {
        BbPress();
    }
    if (evt.keyCode == '74') {
        BPress();
    }
    if (evt.keyCode == '75') {
        CPress();
    }
}
function CPress() {
    setBackgroundColor("#EF476f")
    setColor('#47EFC7')
}

function DbPress() {
    setBackgroundColor("#CB8AFF")
    setColor('#BEFF8A')
}

function DPress() {
    setBackgroundColor("#FFD166")
    setColor('#6694FF')
}

function EbPress() {
    setBackgroundColor("#BCBEBC")
    setColor('#BEBCBE')
}

function EPress() {
    setBackgroundColor("#89CFF0")
    setColor('#F0AA89')
}

function FPress() {
    setBackgroundColor("#D11E00")
    setColor('#00B3D1')
}

function GbPress() {
    setBackgroundColor("#5A4FCF")
    setColor('#C4CF4F')
}

function GPress() {
    setBackgroundColor("#FF9B21")
    setColor('#2185FF')
}

function AbPress() {
    setBackgroundColor("#FF69B4")
    setColor('#69FFB4')
}

function APress() {
    setBackgroundColor("#ADFF9E")
    setColor('#F09EFF')
}

function BbPress() {
    setBackgroundColor("#EDAEC0")
    setColor('#AEEDDB')
}

function BPress() {
    setBackgroundColor("#214ED3")
    setColor('#D3A621')
}
