let intervalId;

function getTime(mode) {
    clearInterval(intervalId);
    if(mode === "break") return {
        min: 5,
        sec: 0
    }
    else if (mode === "longbreak") return {
        min: 15,
        sec: 0
    }
    else return {
        min: 25,
        sec: 0
    }
}

function fixTime(time) {
    if(time < 10) return `0${time}`
    else return time
}


function start([minutes , seconds], setTimeCallback) {
    let min = minutes;
    let sec = seconds;

    intervalId = setInterval(() => {
        if(min === 0 && sec === 0) {
            clearInterval(intervalId)
        }
        else if(sec === 0) {
            min -= 1;
            sec = 59;
        } else {
            sec -= 1;
        }

        setTimeCallback({min: min, sec:sec});
    }, 1000);
}

function pause(){
    clearInterval(intervalId);
}

export {getTime, fixTime, start, pause}