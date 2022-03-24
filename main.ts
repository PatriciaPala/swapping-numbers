input.onButtonPressed(Button.A, function () {
    _1 += 1
    basic.showNumber(_1)
})
input.onGesture(Gesture.TiltLeft, function () {
    _2 += 1
    basic.showNumber(_2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_2)
    basic.showNumber(_1)
})
input.onButtonPressed(Button.B, function () {
    _1 += -1
    basic.showNumber(_1)
})
input.onGesture(Gesture.TiltRight, function () {
    _2 += -1
    basic.showNumber(_2)
})
// tired
let _2 = 0
let _1 = 0
basic.showIcon(IconNames.Yes)
_1 = 0
_2 = 0
basic.forever(function () {
	
})
