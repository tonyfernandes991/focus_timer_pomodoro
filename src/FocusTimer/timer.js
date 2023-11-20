import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./action.js"
import { buttonSoundMusic , timeEnd } from './sounds.js'


export function coutdown(){

    clearTimeout(state.countdownID)

    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        timeEnd()
        reset()
        return
        
    }

    updateDisplay(minutes, seconds)

    
    state.countdownID = setTimeout(() => coutdown(), 1000)
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes // nullish coalesing operator
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}


const plus = document.getElementById("plus")
plus.addEventListener('click',function(){
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    if(minutes > 55){
        return
    } 
    buttonSoundMusic()
    
    updateDisplay(minutes + 5, seconds)

})

const minus = document.getElementById("minus")
minus.addEventListener('click', function(){
    const minutes = Number(el.minutes.textContent)
    const seconds = Number(el.seconds.textContent)

        if (minutes <= 5) {
            return
        }
        buttonSoundMusic()
        updateDisplay(minutes - 5, seconds)
})
