import subprocess
subprocess.getoutput("adb forward tcp:27042 tcp:27042")
subprocess.getoutput("adb forward tcp:27043 tcp:27043")

# 以后手机端每次启动了frida-server，都要执行端口转发，否则会报错


