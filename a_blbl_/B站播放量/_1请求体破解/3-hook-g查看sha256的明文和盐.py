# 9cafa6466a028bfb

import frida
import sys

rdev = frida.get_remote_device()
# session = rdev.attach("哔哩哔哩")
session = rdev.attach("tv.danmaku.bili")

scr = """
Java.perform(function () {
    var a = Java.use("com.bilibili.commons.m.a");
    var ByteString = Java.use("com.android.okhttp.okio.ByteString");
    a.g.implementation = function(bytes, bytes2){
        console.log("请求来了");
        console.log("bytes=",ByteString.of(bytes).utf8());
        console.log("bytes2=",ByteString.of(bytes2).utf8());

        var res = this.g(bytes, bytes2);
        console.log("sign=",res);

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
请求来了
bytes= aid=968620643&auto_play=0&build=6240300&cid=202261238&did=fU52TixILBQlEicfLk93Tw9fNk4rR3UtYQ&epid=329002&from_spmid=tm.recommend.feed.bangumi&ftime=1704374954&lv=0&mid=0&mobi_app=android&part=0&sid=4340&spmid=pgc.pgc-video-detail.0.0&stime=1704374611&sub_type=1&type=4
bytes2= 9cafa6466a028bfb   盐
sign= 4021718af1f29a2279dbcd7d4098a50cc042d8b69e6233c8e517592d598a403d

'''