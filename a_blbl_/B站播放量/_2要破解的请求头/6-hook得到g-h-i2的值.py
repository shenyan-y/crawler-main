import frida
import sys
from frida.core import Device

rdev = frida.get_remote_device()
session = rdev.attach("哔哩哔哩")

scr = """
Java.perform(function () {
    var a = Java.use("com.bilibili.lib.biliid.internal.fingerprint.a.a");
    a.b.implementation = function(str){   
       console.log("参数=",str);
       var res = this.b(str);
       console.log("结果=",res);
       return res;
    }

    var q = Java.use("kotlin.g0.q");
    //i iVar = q.S0(q.n1(0, Math.min(str.length() - 1, 62)), 2);
    q.S0.implementation = function(iVar,i ){   
       var res = this.S0(iVar,i);
       // 手动调用
       console.log('g=',res.g());
       console.log('h=',res.h());
       console.log('i=',res.i());
       return res;
    }

});
"""
script = session.create_script(scr)

script.load()
sys.stdin.read()

'''
参数= 2cbf1dbb4af112fafc0a754f02011305202401092245429bd3a5f2b2e69a2e
g= 0
h= 60
i= 2
结果= 4b


'''