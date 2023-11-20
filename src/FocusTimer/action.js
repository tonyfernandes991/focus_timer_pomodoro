import state from './state.js'
import * as timer from './timer.js'
import { buttonSoundMusic } from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    buttonSoundMusic()
    timer.coutdown()

}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    buttonSoundMusic()
    timer.updateDisplay()
}

export function plus(){
    
}


