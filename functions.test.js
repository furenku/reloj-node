const moment = require("moment")


const functions = require("./functions")

describe("functions", function() {

    test("comprobar que texto de hora es correcto", function(){

        expect( functions.getTimeText() ).toBe("La hora es: ")

    })

    test("la hora se calcula correctamente", function(){

        expect( functions.getTime() ).toBe( moment().format("HH:mm") )

    })


    test("texto de hora se integra correctamente", function(){

        expect( functions.currentTime() ).toBe("La hora es: "+moment().format("HH:mm"))

    })
    
})

