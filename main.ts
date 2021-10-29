input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B) || zähler <= 1) {
    	
    } else {
        zähler += -1
        basic.showNumber(zähler)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (verblVersuche > 0) {
        verblVersuche += -1
        if (zähler == geheimzahl) {
            basic.showIcon(IconNames.Happy)
            geheimzahl = randint(1, 6)
            anzWins += 1
        } else {
            if (zähler < geheimzahl) {
                basic.showIcon(IconNames.ArrowNorth)
            } else {
                basic.showIcon(IconNames.ArrowSouth)
            }
        }
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showNumber(anzWins)
            basic.showString("wins")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A) || zähler >= 6) {
    	
    } else {
        zähler += 1
        basic.showNumber(zähler)
    }
})
let verblVersuche = 0
let anzWins = 0
let geheimzahl = 0
let zähler = 0
zähler = 5
geheimzahl = randint(1, 6)
anzWins = 0
verblVersuche = 10
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
