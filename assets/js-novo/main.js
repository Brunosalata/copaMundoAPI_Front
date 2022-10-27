
import { app } from './firebase.js'

import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const db = getFirestore(app)

function showConfet(id){
    const element = document.getElementById(id)
    PerformanceEntry.confetti(element)
}

function updateScore(id, br, other){
    const element = document.getElementById(id)
    element.innerText=`${br} x ${other}`
}

function throwGalvao(){
    const audio = new Audio('assets/audio/gol.mp3')
    audio.play()
}

onSnapshot(doc(db, "matches", "br-01"), (doc) => {
    const { br, other } = doc.data()

    if(br > 0) {
        showConfet('br-01')
    }
})

setInterval(() => {
    showConfet('br-01')
}, 2000)

console.log(app)