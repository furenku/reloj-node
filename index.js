const moment = require("moment")


const textoHora = "La hora es: "


console.log( textoHora + moment().format("hh:mm:ss") )
