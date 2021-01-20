input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Fabulous)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onGesture(Gesture.FreeFall, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    basic.showIcon(IconNames.House)
})
