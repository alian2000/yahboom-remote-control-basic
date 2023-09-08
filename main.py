while True:
    makerbit.connect_ir_receiver(DigitalPin.P0, IrProtocol.NEC)
    basic.show_string(convert_to_text(makerbit.ir_datagram()))