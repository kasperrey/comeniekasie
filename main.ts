input.onGesture(Gesture.LogoDown, function () {
    snelheid += -1
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("dodo", volume)
})
input.onButtonPressed(Button.AB, function () {
    snelheid += 1
})
input.onGesture(Gesture.LogoUp, function () {
    snelheid = 0
})
input.onButtonPressed(Button.B, function () {
    volume += 1
    if (volume > 26) {
        volume = 0
    }
    if (volume == 1) {
        basic.showString("a")
    } else if (volume == 2) {
        basic.showString("b")
    } else if (volume == 3) {
        basic.showString("c")
    } else if (volume == 4) {
        basic.showString("d")
    } else if (volume == 5) {
        basic.showString("e")
    } else if (volume == 6) {
        basic.showString("f")
    } else if (volume == 7) {
        basic.showString("g")
    } else if (volume == 8) {
        basic.showString("h")
    } else if (volume == 9) {
        basic.showString("i")
    } else if (volume == 10) {
        basic.showString("j")
    } else if (volume == 11) {
        basic.showString("k")
    } else if (volume == 12) {
        basic.showString("l")
    } else if (volume == 13) {
        basic.showString("m")
    } else if (volume == 14) {
        basic.showString("n")
    } else if (volume == 15) {
        basic.showString("o")
    } else if (volume == 16) {
        basic.showString("p")
    } else if (volume == 17) {
        basic.showString("q")
    } else if (volume == 18) {
        basic.showString("R")
    } else if (volume == 19) {
        basic.showString("S")
    } else if (volume == 20) {
        basic.showString("T")
    } else if (volume == 21) {
        basic.showString("U")
    } else if (volume == 22) {
        basic.showString("V")
    } else if (volume == 23) {
        basic.showString("W")
    } else if (volume == 24) {
        basic.showString("x")
    } else if (volume == 25) {
        basic.showString("Y")
    } else {
        basic.showString("Z")
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showString("a")
    } else if (value == 2) {
        basic.showString("b")
    } else if (value == 3) {
        basic.showString("c")
    } else if (value == 4) {
        basic.showString("d")
    } else if (value == 5) {
        basic.showString("e")
    } else if (value == 6) {
        basic.showString("f")
    } else if (value == 7) {
        basic.showString("g")
    } else if (value == 8) {
        basic.showString("h")
    } else if (value == 9) {
        basic.showString("i")
    } else if (value == 10) {
        basic.showString("j")
    } else if (value == 11) {
        basic.showString("k")
    } else if (value == 12) {
        basic.showString("l")
    } else if (value == 13) {
        basic.showString("m")
    } else if (value == 14) {
        basic.showString("n")
    } else if (value == 15) {
        basic.showString("o")
    } else if (value == 16) {
        basic.showString("p")
    } else if (value == 17) {
        basic.showString("q")
    } else if (value == 18) {
        basic.showString("R")
    } else if (value == 19) {
        basic.showString("S")
    } else if (value == 20) {
        basic.showString("T")
    } else if (value == 21) {
        basic.showString("U")
    } else if (value == 22) {
        basic.showString("V")
    } else if (value == 23) {
        basic.showString("W")
    } else if (value == 24) {
        basic.showString("x")
    } else if (value == 25) {
        basic.showString("Y")
    } else {
        basic.showString("Z")
    }
})
let snelheid = 0
let volume = 0
volume = 0
basic.forever(function () {
    powerfunctions.connectIrLed(AnalogPin.P0)
    powerfunctions.setSpeed(PowerFunctionsMotor.Red1, snelheid)
})
