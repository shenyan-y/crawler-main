import subprocess
from functools import partial

# 解决 execjs 在调用 Node.js 时，输出乱码或出错的问题
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")


import execjs
# f = open("第一个w.js", mode="r", encoding="utf-8")
first_js = execjs.compile(open("第一个w.js", mode="r", encoding="utf-8").read())
second_js = execjs.compile(open("第二个w.js", mode="r", encoding="utf-8").read())
third_js = execjs.compile(open("第三个w.js", mode="r", encoding="utf-8").read())


import requests
import time
import re
import json
from urllib.parse import urljoin

from util import get_now, jsonp_handle, dowload_img, trun_back, get_x, get_slide_track



session = requests.session()

session.headers["User-Agent"] =  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"


# ==================== 第一次请求，注册验证码 =========================

regist_url = f"https://demos.geetest.com/gt/register-slide?t={get_now()}"
regist_resp = session.get(regist_url)
# print(regist_resp.text)
regist_dict = regist_resp.json()

gt = regist_dict['gt']
challenge = regist_dict['challenge']

# ==================== 第二次请求，访问gettype =========================


gettype_url = "https://apiv6.geetest.com/gettype.php"
gettype_parames = {
    "gt": gt,
    "callback": f"geetest_{get_now()}"
}
gettype_resp = session.get(gettype_url,  params=gettype_parames)
# print(gettype_resp.text)


# ==================== 第三次请求，访问第一波get.php =========================


first_getphp_url = "https://apiv6.geetest.com/get.php"

# first_getphp_params = {
#     "gt": gt,
#     "challenge": challenge,
#     "lang": "zh-cn",
#     "pt": "0",
#     "client_type": "web",
#     "w": ""
# }
first_getphp_dict = first_js.call("cul_first_w", gt, challenge)

# 获取第一次计算之后的aeskey
aeskey = first_getphp_dict['aeskey']

# 获取第一次计算之后的指纹
finger_print = first_getphp_dict['finger_print']

first_getphp_params = first_getphp_dict['msg']
first_getphp_params["callback"] = f"geetest_{get_now()}"

first_getphp_resp = session.get(first_getphp_url, params=first_getphp_params)  # 发送get请求
# print(type(first_getphp_resp.text))

first_getphp_resp_dict = jsonp_handle(first_getphp_resp.text)

# print(first_getphp_dict)
s = first_getphp_resp_dict.get("data").get("s")
# print(s)


# ==================== 第四次请求，访问第一波ajax.php =========================


# 注册 -> 激活 -> 用   这次ajax相当于激活的操作 必须解决这次请求。


second_w = second_js.call("cul_second_w", aeskey, gt, challenge, s, finger_print)
# print(second_w)

first_ajax_url = "https://api.geevisit.com/ajax.php"
first_ajax_params = {
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "pt": "0",
    "client_type": "web",
    "w": second_w,
    "callback": f"geetest_{get_now()}"
}

first_ajax_resp = session.get(first_ajax_url, params=first_ajax_params)
# print(first_ajax_resp.text)




# ==================== 第五次请求，访问第二波get.php =========================


second_getphp_url = "https://api.geevisit.com/get.php"
second_getphp_params = {
    "is_next": "true",
    "type": "slide3",
    "gt": gt,
    "challenge": challenge,
    "lang": "zh-cn",
    "https": "true",
    "protocol": "https://",
    "offline": "false",
    "product": "popup",
    "api_server": "api.geevisit.com",
    "isPC": "true",
    "autoReset": "true",
    "width": "100%",
    "callback": f"geetest_{get_now()}"
}

second_getphp_resp = session.get(second_getphp_url, params=second_getphp_params)
second_getphp_dict = jsonp_handle(second_getphp_resp.text)
# print(second_getphp_dict)
# print(gt, challenge)

new_challenge = second_getphp_dict['challenge']
bg_url = second_getphp_dict['bg']
fullbg_url = second_getphp_dict['fullbg']
slice_url = second_getphp_dict['slice']
s = second_getphp_dict['s']
c = second_getphp_dict['c']

# print(bg_url)
# print(fullbg_url)
# print(slice_url)
# url的拼接，如果找不到合适的url进行拼接 在抓包中找。

static_url = "https://static.geetest.com"
bg_url = urljoin(static_url, bg_url)
fullbg_url = urljoin(static_url, fullbg_url)
slice_url = urljoin(static_url, slice_url)
# print(bg_url)
# print(fullbg_url)
# print(slice_url)
dowload_img("bg.jpg", bg_url, session)
dowload_img("fullbg.jpg", fullbg_url, session)
dowload_img("slice.jpg", slice_url, session)

# 拿到的图片是乱的，需要找到 js 哪里把背景图进行了还原
# js源码里面：乱序的背景图(不显示) o   ->   用户能看到的背景图 e
# o: <canvas width="312" height="160"></canvas>
# e: <canvas class="geetest_canvas_fullbg geetest_fade geetest_absolute" height="160" width="260" style="display: block; opacity: 1;"></canvas>
"""
web前端对图片的处理...
python可以对图片进行处理 -> PIL
pillow
"""
# 乱序图片处理见 util.py  如下调用
trun_back("bg.jpg")
trun_back("fullbg.jpg")

"""
var gt = "019924a82c70bb123aae90d483087f94"
var challenge = "c9a565973a6f5dddf8a9636981816ff6d6"
var s = '6d746c63';
var c = [
    12,
    58,
    98,
    36,
    43,
    95,
    62,
    15,
    12
];
var x_juli = 28;  // 横向拖动距离
var guiji =  []; // 还没有加密的轨迹
var hd_t = 288 // 滑动的时间

// console.log(cul_third_w(gt, challenge, s, c, x_juli, guiji, hd_t));
"""

# x_juli, guiji, hd_t
# pip install opencv-python

x_juli = get_x()
# [x, y, t]  时间t是随机出来的  x可以使用匀加速直线运动的公式,加速度要随机, 不能用匀速直线运动
# 整体这个轨迹,可以自己拖...存起来...直接怼就可以了...

# 直接上网上找现成的算法-离散分布 => 一个版本...

guiji, hd_t = get_slide_track(x_juli)


# ==================== 第六次请求，访问第二波ajax.php =========================

# 完成验证

# 计算最后一个w
third_w = third_js.call("cul_third_w", gt, new_challenge, s, c, x_juli, guiji, hd_t)
# print(third_w)

second_ajax_params = third_w
# 组装callback
second_ajax_params["callback"] = f"geetest_{get_now()}"


second_ajax_url = "https://api.geevisit.com/ajax.php"

resp = session.get(second_ajax_url, params=second_ajax_params)
print(resp.text)



# 滑动验证过后 提交请求
val_dict = jsonp_handle(resp.text)
validate = val_dict['validate']

# 验证
verify_url = "https://demos.geetest.com/gt/validate-slide"
form_data = {
    "geetest_challenge": new_challenge,
    "geetest_validate": validate,
    "geetest_seccode": validate + "|jordan",
}

final_resp = session.post(verify_url, form_data)
print(final_resp.text)










