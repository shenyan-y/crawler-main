import frida
import sys

rdev = frida.get_remote_device()
pid = rdev.spawn(["tv.danmaku.bili"])
session = rdev.attach(pid)

scr = """
Java.perform(function () {
    var e = Java.use("com.bilibili.lib.foundation.e");

    e.b.implementation = function(){   
        var res = this.b();
       console.log("res=",JSON.stringify(res));
       return res;
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
<instance: com.bilibili.lib.foundation.a, $className: com.bilibili.lib.foundation.DefaultApps>
它是接口类型的对象：com.bilibili.lib.foundation.a
具体类型是：com.bilibili.lib.foundation.DefaultApps
'''