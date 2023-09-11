let var1: string;
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
    var1 = convertToText(makerbit.irDatagram())
    basic.showString(var1)
    console.log(var1)
}
