import frida

rdev = frida.get_usb_device()
for app in rdev.enumerate_processes():
    print(app.pid, app.name)


