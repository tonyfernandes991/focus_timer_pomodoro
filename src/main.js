import './toggle-mode.js'
import { forestMusic , rainMusic, coffee, placeFireMusic } from './FocusTimer/elements.js'
import * as FocusTimer from './FocusTimer/index.js'
import * as sounds from './FocusTimer/sounds.js'


forestMusic.addEventListener('click', function(){
    if(forestMusic.classList.contains('active')){
        forestMusic.classList.remove('active')
        sounds.stopForest()
        return
    }
    forestMusic.classList.add('active')
    sounds.playForest()
}  )

rainMusic.addEventListener('click', function(){
    if(rainMusic.classList.contains('active')){
        rainMusic.classList.remove('active')
        sounds.stopRain()
        return
    }
    rainMusic.classList.add('active')
    sounds.playRain()
}  )

coffee.addEventListener('click', function(){
    if(coffee.classList.contains('active')){
        coffee.classList.remove('active')
        sounds.stopCoffee()
        return
    }
    coffee.classList.add('active')
    sounds.playCoffee()
}  )

placeFireMusic.addEventListener('click', function(){
    if(placeFireMusic.classList.contains('active')){
        placeFireMusic.classList.remove('active')
        sounds.stopFireplace()
        return
    }
    placeFireMusic.classList.add('active')
    sounds.playFireplace()
}  )


FocusTimer.start(25, 0)