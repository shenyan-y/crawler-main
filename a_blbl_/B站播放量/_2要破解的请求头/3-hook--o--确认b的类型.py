import frida
import sys

rdev = frida.get_remote_device()
pid = rdev.spawn(["tv.danmaku.bili"])
session = rdev.attach(pid)

scr = """
Java.perform(function () {
    var a = Java.use("com.bilibili.api.a");

    a.o.implementation = function(arg0){   
       console.log("obj=",arg0);
       console.log("obj=",JSON.stringify(arg0));
       this.o(arg0);
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
obj= [object Object]
obj= "<instance: com.bilibili.api.a$b, $className: tv.danmaku.bili.utils.p$a>"

# 可以看到：是com.bilibili.api.a$b 接口类型的对象
# 但具体类型是：tv.danmaku.bili.utils.p$a
'''