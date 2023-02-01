input.onButtonPressed(Button.A, function () {
    music.playTone(69, music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
})
