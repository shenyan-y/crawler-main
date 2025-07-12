import frida
import sys
from frida.core import Device
rdev = frida.get_remote_device()

# session = rdev.attach("tv.danmaku.bili")
session = rdev.attach("哔哩哔哩")

scr = """
Java.perform(function () {
    var a = Java.use("com.bilibili.commons.m.a");

    a.i.implementation = function(str){   
       console.log("参数=",str); // 参数是带加密的明文：E.t()+时间戳+1百万以内的随机数字
       var res = this.i(str);
       console.log("返回值=",res); // 返回值就是session
       return res;
    }

});
"""
script = session.create_script(scr)

script.load()
sys.stdin.read()

'''
# E.t() 是空的，我们可以用buvid，用空也可以
参数= 1704978976694247833
返回值= d47380909bcc362c40a43395e16875a54d7f152e
'''