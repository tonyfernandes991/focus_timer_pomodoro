export const buttonForestMusic = new Audio('./music/Floresta.wav')
export const buttonRainMusic = new Audio('./music/Chuva.wav')
export const btnCoofee = new Audio('./music/Cafeteria.wav')
export const buttonFireplaceMusic = new Audio('./music/Lareira.wav')
export const buttonSound = new Audio('./music/button-press.wav')
export const timeEndMusic = new Audio('./music/kichen-timer.mp3')

// time end sound
export function timeEnd(){
    timeEndMusic.play()
}

// button sound
export function buttonSoundMusic(){
    buttonSound.play()
}

//Forest
export function playForest (){
    buttonForestMusic.loop = true
    buttonForestMusic.play()
}

export function stopForest(){
    buttonForestMusic.pause()
}

//rain

export function playRain(){
    buttonRainMusic.loop = true
    buttonRainMusic.play()
}

export function stopRain(){
    buttonRainMusic.pause()    
}

//coffee

export function playCoffee(){
    btnCoofee.loop = true
    btnCoofee.play()
}

export function stopCoffee(){
    btnCoofee.pause()    
}


//Fireplace

export function playFireplace(){
    buttonFireplaceMusic.loop = true
    buttonFireplaceMusic.play()
}

export function stopFireplace(){
    buttonFireplaceMusic.pause()    
}