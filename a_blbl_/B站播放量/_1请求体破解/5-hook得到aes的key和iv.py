import frida
import sys
rdev = frida.get_remote_device()
# session = rdev.attach("哔哩哔哩")
session = rdev.attach("tv.danmaku.bili")

scr = """
Java.perform(function () {
    var ByteString = Java.use("com.android.okhttp.okio.ByteString");
    // hook 构造函数--》需要加 $init  ---》overload 写上签名
    // 构造方法可能有多个，hook用的那个，用 参数签名区分
    var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
    SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function(key,name){
        console.log("请求来了");
        console.log("key=",ByteString.of(key).utf8());
        console.log("name=",name);

        var res = this.$init(key,name);
        return res;
    };

    var IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");
    IvParameterSpec.$init.overload('[B').implementation = function(iv){
        console.log("iv=",ByteString.of(iv).utf8());
        var res = this.$init(iv);
        return res;
    };

});
"""



script = session.create_script(scr)


def on_message(message, data):
    print(message, data)

script.on("message", on_message)
script.load()
sys.stdin.read()

'''
key= fd6b639dbcff0c2a1b03b389ec763c4b
iv= 77b07a672d57d64c

'''