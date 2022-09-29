const moment = require("moment")

function getTimeText() {
    
    const timeText = "La hora es: "
    
    return timeText

}


function getTime() {

    return moment().format("HH:mm")

}

function currentTime() {

    return functions.getTimeText() + moment().format("HH:mm")

}


const functions = {

    getTimeText,
    getTime,
    currentTime

}


module.exports = functions