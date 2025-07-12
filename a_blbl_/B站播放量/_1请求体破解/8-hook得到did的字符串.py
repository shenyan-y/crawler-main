import frida
import sys

rdev = frida.get_remote_device()
pid = rdev.spawn(["tv.danmaku.bili"]) # 如果是spawn方案，必须写包名，放到列表中
session = rdev.attach(pid)
# session = rdev.attach("tv.danmaku.bili")

scr = """
Java.perform(function () {
    var didCls = Java.use("com.bilibili.lib.biliid.utils.f.a");

    didCls.f.implementation = function(arg5){
        var res = this.f(arg5);
        console.log("生成的did = ",res);
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
