let Button1 = ""
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.pause(1000)
basic.clearScreen()
while (true) {
    makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
    Button1 = convertToText(makerbit.irDatagram())
    basic.showString(Button1)
}
