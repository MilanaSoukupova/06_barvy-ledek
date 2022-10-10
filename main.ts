basic.showLeds(`
    # . # . #
    . . # . .
    # # # # #
    . . # . .
    # . # . #
    `)
let strip = neopixel.create(DigitalPin.P1, 9, NeoPixelMode.RGB)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
basic.pause(1000)
let pasek2 = neopixel.create(DigitalPin.P2, 9, NeoPixelMode.RGB)
pasek2.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
pasek2.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(500)
    pasek2.show()
    pasek2.rotate(1)
    basic.pause(500)
})
