import frida
import sys

rdev = frida.get_remote_device()
pid = rdev.spawn(["tv.danmaku.bili"])
session = rdev.attach(pid)


scr = """
Java.perform(function () {
    var c = Java.use("com.bilibili.api.c");

    c.b.implementation = function(arg0){   
       console.log("buvid=",arg0);
       console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
       this.b(arg0);
    }
});
"""



script = session.create_script(scr)
def on_message(message, data):
    print(message, data)
script.on("message", on_message)
script.load()
rdev.resume(pid)
sys.stdin.read()

'''
buvid= XX6282668121FF8B3256F67E76387E4253613 # 跟抓包抓到的buvid是一致的
java.lang.Throwable
	at com.bilibili.api.c.b(Native Method)  #看谁调用了它
	at c2.f.b0.c.a.d.e(BL:1)  # c2.f.b0.c.a.d类的e方法调用了 b
	at c2.f.b0.c.a.d.a(BL:11) # c2.f.b0.c.a.d类的a方法调用了e
	at tv.danmaku.bili.utils.x.a(BL:14)
	at tv.danmaku.bili.proc.y.f(BL:1)
	at tv.danmaku.bili.proc.c.run(Unknown Source:2)
	at android.os.Handler.handleCallback(Handler.java:938)
	at android.os.Handler.dispatchMessage(Handler.java:99)
	at android.os.Looper.loop(Looper.java:223)
	at android.os.HandlerThread.run(HandlerThread.java:67)


#### 确定：c2.f.b0.c.a.e 调用了b把buvid传入了



'''