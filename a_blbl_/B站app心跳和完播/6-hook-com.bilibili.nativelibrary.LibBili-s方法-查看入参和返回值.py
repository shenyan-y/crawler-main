import frida
import sys

# 连接手机设备
rdev = frida.get_remote_device()

session = rdev.attach("哔哩哔哩")

scr = """
Java.perform(function () {
    var LibBili = Java.use("com.bilibili.nativelibrary.LibBili");
    var TreeMap = Java.use("java.util.TreeMap");

    LibBili.s.implementation = function(map){   
        console.log("--------------------------");
       console.log("map=",JSON.stringify(map));
       var obj = Java.cast(map,TreeMap);
       console.log("map=",obj.toString());

       var res = this.s(map);
       console.log("返回值=",res.toString());
       return res;
    }
});
"""

script = session.create_script(scr)


def on_message(message, data):
    print(message, data)


script.on("message", on_message)

script.load()
sys.stdin.read()

'''
map= {aid=721896302, appkey=1d8b6e7d45233436, build=6240300, c_locale=zh-Hans_CN, channel=xxl_gdt_wm_253, cid=447618041, mobi_app=android, platform=android, s_locale=zh-Hans_CN, statistics={"appId":1,"platform":3,"version":"6.24.0","abtest":""}}
返回值= actual_played_time=0&aid=721896302&appkey=1d8b6e7d45233436&auto_play=0&build=6240300&c_locale=zh-Hans_CN&channel=xxl_gdt_wm_253&cid=447618041&epid=0&epid_status=&from=2&from_spmid=main.ugc-video-detail.0.0&last_play_progress_time=0&list_play_time=0&max_play_progress_time=0&mid=0&miniplayer_play_time=0&mobi_app=android&network_type=1&paused_time=0&platform=android&play_status=0&play_type=1&played_time=0&quality=32&s_locale=zh-Hans_CN&session=22531fb928ddec0d0813bb78e47aa2aaca219193&sid=0&spmid=main.ugc-video-detail.0.0&start_ts=0&statistics=%7B%22appId%22%3A1%2C%22platform%22%3A3%2C%22version%22%3A%226.24.0%22%2C%22abtest%22%3A%22%22%7D&sub_type=0&total_time=0&ts=1704983029&type=3&user_status=0&video_duration=289&sign=61df7b9e0fe7a181d3461f63671c0d63


'''
