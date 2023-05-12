const btnStart = document.querySelector("#btn-start");
const btnStop = document.querySelector("#btn-stop");
const btnReset = document.querySelector("#btn-reset");
const btnForceStart = document.querySelector("#btn-force-start");

const secField = document.querySelector(".sec");
const minsField = document.querySelector(".mins");
const hrsField = document.querySelector(".hrs");


let seconds = 1;
let minutes = 0;
let hours = 0;

let enableStart = false;

const timerFormat = (par, field) => {

    field.innerHTML = par < 10
    if(par < 10) field.innerHTML = '0' + par;
    else field.innerHTML = par;
}

const timer = setInterval(function() {

    if(!enableStart) return;
    else {
        
        if(seconds === 60) {
            seconds = 0;
            minutes++;

            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

        timerFormat(seconds, secField);
        timerFormat(minutes, minsField);
        timerFormat(hours, hrsField)
        ++seconds;
    }

},100);

btnStart.addEventListener('click', function() {
    enableStart = true;
    timer;
});

btnStop.addEventListener('click', function() {
    enableStart = false;
});

btnReset.addEventListener('click', function() {
   enableStart = false;

   seconds = 0;
   minutes = 0;
   hours = 0;

   secField.innerHTML = '00';
   minsField.innerHTML = '00';
   hrsField.innerHTML = '00';

});

btnForceStart.addEventListener('click', function() {
   
    seconds = 0;
    minutes = 0;
    hours = 0;

    enableStart = true;
    timer;

})

// const start = document.querySelector('#start')
// const stop = document.querySelector('#stop')
// const restart = document.querySelector('#restart')
// const nextTimer = document.querySelector('#nextTimer')

// const hours = document.querySelector('.hours')
// const mins = document.querySelector('.min')
// const secs = document.querySelector('.sec')


// let _hours = 0
// let _mins = 0
// let _secs = 0

// let timerInterval
// let timerStarted = false

// const updateDOM = () => {
//     hours.innerText = !_hours ? '00' : _hours < 10 ? `0${_hours}` : _hours
//     mins.innerText = !_mins ? '00' : _mins < 10 ? `0${_mins}` : _mins
//     secs.innerText = !_secs ? '00' : _secs < 10 ? `0${_secs}` : _secs
// }

// const startTimer = () => {
//     _secs++
    
//     if (_secs === 59) {
//         _mins++
//         _secs = 0
//         } 
//     if (_mins === 60) {
//         _hours++
//         _mins = 0
//     }
     
     
//     updateDOM()
// }

// const startInterval = () => {
//     if(timerStarted) return
//     timerStarted = true
//     startTimer()
//     timerInterval = setInterval(startTimer, 1000)
// }

// const stopTimer = () => {
//     clearInterval(timerInterval)
//     timerStarted = false
// }

// const restartTimer = () => {
//     stopTimer(timerInterval)
//      _hours = 0
//      _mins = 0
//      _secs = 0
     
//      updateDOM()
// }

// const startNewTimer = () => {
//     stopTimer()
//     _hours = 0
//      _mins = 0
//      _secs = 0
//      updateDOM()
//      startInterval()
// }


// start.addEventListener('click', startInterval)

// stop.addEventListener('click', stopTimer)

// restart.addEventListener('click', restartTimer)

// nextTimer.addEventListener('click', startNewTimer)