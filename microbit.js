let IconHeart: boolean = false


input.onButtonPressed(Button.A, function () {
    if (IconHeart ) {
        IconHeart=false
    } else {
        IconHeart=true
    }
})

basic.forever(function () {
    if (IconHeart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Cow)
    }


    basic.pause(500)
    basic.clearScreen()

})
