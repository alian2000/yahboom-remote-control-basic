Button1 = ""
basic.show_leds("""
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    """)
basic.pause(1000)
basic.clear_screen()
while True:
    makerbit.connect_ir_receiver(DigitalPin.P8, IrProtocol.NEC)
    var1 = convert_to_text(makerbit.ir_datagram())
    basic.show_string(var1)
    print(var1)