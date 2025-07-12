import re
import time
import urllib

import frida
import requests

sess = requests.session()

st = str(int(time.time()))


# 当 Frida 中 send() 被调用时，会调用这个函数。主要用于调试 Frida 中 JS 的输出。
def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {}".format(message['payload']))
    else:
        print(message)


def get_sign(datas):

    # 使用 Frida RPC 暴露了一个函数 sign()，供 Python 端调用。
    # 使用 Java.perform() 确保 hook 在正确时机。
    # Java.choose() 找到 InnerSignImpl 实例，进行签名。
    jscode = '''
       rpc.exports = {
            sign: function (data, times) {
                var ret = null;
                Java.perform(function () {
                    Java.choose("mtopsdk.security.InnerSignImpl", {
                        onMatch: function (instance) {
                            //这些都是传入的参数，具体传参内容根据实际修改
                            var HashMap1 = Java.use("java.util.HashMap").$new();
                            HashMap1.put("data", data);
        
                            HashMap1.put("deviceId", "Ar-o9eX0eLVcx2i9x8MKW1y2nb5_vIb4ad41bj1lrGuR");
                            HashMap1.put("sid", "");
                            HashMap1.put("uid", "");
                            HashMap1.put("x-features", "27");
                            HashMap1.put("appKey", "21407387");
        
                            HashMap1.put("api", "mtop.taobao.idlemtopsearch.search");
        
                            HashMap1.put("lat", "0");
                            HashMap1.put("lng", "0");
                            HashMap1.put("utdid", "aChgsJpEtNUDAGXXmiDNI0hh");
                            HashMap1.put("extdata", "openappkey=DEFAULT_AUTH");
                            HashMap1.put("ttid", "270200@fleamarket_android_7.8.80");
                            HashMap1.put("t", times);
                            HashMap1.put("v", "1.0");
        
                            var jExt = Java.use("java.util.HashMap").$new();
                            jExt.put("pageId", "");
                            jExt.put("pageName", "");
        
                            ret = instance.getUnifiedSign(HashMap1, jExt, "21407387", "", false, "r_38").toString();
                            //console.log('getUnifiedSign ret value is ' + res);
                            // ret["result"] = res;
                        },
                        onComplete: function () {
                        }
                    })
                })
                return ret;
            }
        };
    '''

    process = frida.get_usb_device().attach('com.taobao.idlefish')  # 获取连接手机 并附加到闲鱼 APP。
    script = process.create_script(jscode)  # 创建 Hook 脚本。
    script.on('message', on_message)  # 绑定消息处理。
    script.load()  # 加载并执行 JS 脚本。

    result = script.exports.sign(datas["data"], st)  # 通过 RPC 调用 JS 中的 sign() 方法。
    print("某鱼x-sign结果：", result)
    return result


# 通过RPC调用Frida脚本钟的函数，传递参数
def get_search_data(key):
    headers = {
        # "x-sgext": "JAzBJeO4d1W48tuhC4h2byXwFfMW9gb2FvIW4hb0BuIU9hH2EPYd8xLyBvEV8RXxFfEV8RXxFfEV8RXiFvUG8QbxFeIV8RXxBvEG8AbwBvAG8AbwBvAG8QbyBvAG8wbwBvEG8QbxBvEG8QbiQOIG9EPzQPEV4hXxFfEV4hXiF6VE4hXiBvMG8QbxBoZmqXw%3D",
        "umid": "KSMBG/BLPAXyfgKW3e+4rY5zuqRZaxHO",
        # "x-sign": "azU7Bc002xAALWniAqNHoorw2XUr3WntYvtra%2B5PkiV7f1n81unaLTbKicQEM5JnsQpSRyx72PGK562ZOdwt6cipy31pzWntac1p7W",
        "x-nettype": "WIFI",
        "x-pv": "6.3",
        "x-nq": "WIFI",
        "EagleEye-UserData": "spm-cnt=a2170.8011571.0.0&spm-url=a2170.unknown.0.0",
        "first_open": "0",
        "x-features": "27",
        "x-app-conf-v": "0",
        # "x-mini-wua": "azARgoG49LBMzNBwmyGzvNvgMkJS0Sa67i5jgJA57Ni83HH8JYyzfhuKpfKcqKNuR31pz5GgfRYaZsb81l%2Fj%2FdWvz2lcdBPKtXe8NDmlsRlcStuWuZ4x2EdMzXB%2FiBb%2Fz%2FUXibOZsY2VjTk8wNYZhxkmQEWYhxOIX2hMTHOlUlasL8Q%3D%3D",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        # "x-t": "1747578287",
        # "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "x-bx-version": "6.5.88",
        "f-refer": "mtop",
        "x-extdata": "openappkey%3DDEFAULT_AUTH",
        "x-ttid": "270200%40fleamarket_android_7.8.80",
        "x-app-ver": "7.8.80",
        # "x-c-traceid": "aChgsJpEtNUDAGXXmiDNI0hh1747578287309003517333",
        "x-location": "0%2C0",
        "x-umt": "JysBJ79LPBXacgKW4zOMYcRryFGjVsDi",
        "a-orange-q": "appKey=21407387&appVersion=7.8.80&clientAppIndexVersion=1120250515194601766&clientVersionIndexVersion=0",
        "x-utdid": "aChgsJpEtNUDAGXXmiDNI0hh",
        "x-appkey": "21407387",
        "x-devid": "Ar-o9eX0eLVcx2i9x8MKW1y2nb5_vIb4ad41bj1lrGuR",
        "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29",
        "Host": "g-acs.m.goofish.com"
    }
    jsonString = "{\"activeSearch\":false,\"bizFrom\":\"home\",\"disableHierarchicalSort\":0,\"forceUseInputKeyword\":false,\"forceUseTppRepair\":false,\"fromFilter\":false,\"fromKits\":false,\"fromLeaf\":false,\"fromShade\":false,\"fromSuggest\":false,\"keyword\":\"" + key + "\",\"pageNumber\":1,\"relateResultListLastIndex\":0,\"relateResultPageNumber\":1,\"resultListLastIndex\":0,\"rowsPerPage\":10,\"searchReqFromActivatePagePart\":\"historyItem\",\"searchReqFromPage\":\"xyHome\",\"searchTabType\":\"SEARCH_TAB_MAIN\",\"shadeBucketNum\":-1,\"suggestBucketNum\":30,\"supportFlexFilter\":true}"
    datas = {
        'data': jsonString
    }
    result = get_sign(datas)
    headers['x-t'] = st

    # 提取签名结果中的字段并加上 URL 编码。 quote_plus 防止中文或特殊字符出错。
    headers['x-sign'] = urllib.parse.quote_plus(re.findall("x-sign=(.*?)}", result, re.S)[0])
    headers['x-mini-wua'] = urllib.parse.quote_plus(re.findall("x-mini-wua=(.*?),", result)[0])
    headers['x-sgext'] = urllib.parse.quote_plus(re.findall("x-sgext=(.*?),", result)[0])
    headers['x-c-traceid'] = f"aChgsJpEtNUDAGXXmiDNI0hh{st}309003517333"
    url = "https://g-acs.m.goofish.com/gw/mtop.taobao.idlemtopsearch.search/1.0"
    response = sess.post(url, headers=headers, data=datas)

    print(response.text)


if __name__ == '__main__':
    key = input("输入需要搜索的商品")
    print(f"查询{key}相关商品")
    get_search_data("key")















