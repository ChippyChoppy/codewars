/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
 */

function humanReadable(seconds) {

    if (seconds < 0 || seconds > 359999) {
        return null
    }
    if (seconds === 0) {
        return '00:00:00'
    }
    // 3600 seconds in one hour
    let hours = Math.floor(seconds / 3600)
    // subtract all seconds that are accounted for in hours
    seconds -= hours * 3600
    // handle need for leading zero if under 10 hours
    if(hours < 10) {
        hours = '0' + hours
    }
    // 60 seconds in one minute
    let minutes = Math.floor(seconds / 60) 
    // subtract all seconds that are accounted for in minutes
    seconds -= minutes * 60
    // handle need for leading zero if under 10 minutes
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    // with hours and minutes taken care of, all that is left is seconds, handle need for leading zero if under 10 seconds
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return `${hours}:${minutes}:${seconds}`
}

console.log(humanReadable(360000))