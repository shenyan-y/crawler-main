"""
e['height'] = r,  160
e['width'] = 260;
Ut = [x,x,x,xx,x,]
for (var a = r / 2, _ = 0; _ < 52; _ += 1) {
    var c = Ut[_] % 26 * 12 + 1
      , u = 25 < Ut[_] ? a : 0
                     //     x, y, w, h
      , l = o[getImageData](c, u, 10, a); // 获取一部分图片
    s[putImageData](l, _ % 26 * 10, 25 < _ ? a : 0); // 把一部分图片画到画布上
}
"""
import json
import re
import time
import cv2
import random

def trun_back(path):
    # python画图的包Pillow
    # pip install Pillow
    from PIL import Image  # Image 就是 python的canvas
    old_img = Image.open(path)
    # 创建一张新图
    new_img = Image.new("RGB", (260, 160))
    Ut = [
    39,
    38,
    48,
    49,
    41,
    40,
    46,
    47,
    35,
    34,
    50,
    51,
    33,
    32,
    28,
    29,
    27,
    26,
    36,
    37,
    31,
    30,
    44,
    45,
    43,
    42,
    12,
    13,
    23,
    22,
    14,
    15,
    21,
    20,
    8,
    9,
    25,
    24,
    6,
    7,
    3,
    2,
    0,
    1,
    11,
    10,
    4,
    5,
    19,
    18,
    16,
    17
]
    r = 160
    a = r // 2  # 整数
    for _ in range(52):
        c = Ut[_] % 26 * 12 + 1
        if 25 < Ut[_]:
            u = a
        else:
            u = 0
        # 获取一个区域 (x1, y1, x2, y2)
        l = old_img.crop((c, u, c + 10, u + a))
        new_img.paste(l, (_ % 26 * 10, a if 25 < _ else 0))

    new_img.save(f"new_{path}")


def get_now():
    # return str(int(time.time()))
    return int(time.time() * 1000)


def jsonp_handle(text):
    jsonp_re = re.compile(r"\((?P<code>.*)\)", re.S)
    jsonp_str = jsonp_re.search(text, re.S).group("code")
    return json.loads(jsonp_str)

def dowload_img(name, url, session):
    resp = session.get(url)
    with open(name, mode="wb") as f:
        f.write(resp.content)



# 计算滑块滑动的距离
def get_x():
    # opencv来完成计算
    """
    pip install numpy==1.24.4 -i https://pypi.tuna.tsinghua.edu.cn/simple
    pip install opencv-python-headless==4.7.0.72 -i https://pypi.tuna.tsinghua.edu.cn/simple
    有ddddocr这个包也要去掉

    import cv2
    # 导入cv2之后没有代码提示，怎么办？
    # 添加路径：
    # D:\study\miniconda3\envs\spider_base\Lib\site-packages\cv2\cv2.pyd
    # D:\study\miniconda3\envs\spider_base\Lib\site-packages\cv2
    # 在 settings 中的 Python Interpreter
    cv2.imshow()
    """
    bg = cv2.imread("new_bg.jpg")
    slice = cv2.imread("slice.jpg")

    # 做灰度处理
    """
        所见到的图 都是 三元色 用 红绿蓝进行 叠加 得到世间各种各样的颜色的
        灰度处理:将彩色图像转换为灰度图像。这个过程就是把每个像素的 RGB（红绿蓝）,
            颜色信息变成一个灰度值（灰色强度）
        """
    bg = cv2.cvtColor(bg, cv2.COLOR_BGR2GRAY)
    slice = cv2.cvtColor(slice, cv2.COLOR_BGR2GRAY)

    # 图片边缘处理
    bg_can = cv2.Canny(bg, 255, 255)
    slice_can = cv2.Canny(slice, 255, 255)

    # 匹配图像的相似度, TM_CCOEFF_NORMED 参数固定即可
    r = cv2.matchTemplate(bg_can, slice_can, cv2.TM_CCOEFF_NORMED)
    # print(r)

    # 获取匹配度最好的一个结果
    minVal, maxVal, minLoc, maxLoc = cv2.minMaxLoc(r)

    x = maxLoc[0]
    y = maxLoc[1]

    # # 测试所用
    # bg = cv2.rectangle(bg, (x, y), (x + 50, y + 50), (255, 255, 255))
    # cv2.imwrite("gray_bg.jpg", bg)  # 保存图片灰度图片
    # cv2.imshow("tu", bg)  # 弹窗
    # cv2.waitKey(0)  # 防止程序一闪就没了
    # cv2.destroyAllWindows()  # 关掉所有窗口

    return x



# 滑动轨迹模拟算法3代
def __ease_out_expo(sep):
    if sep == 1:
        return 1
    else:
        return 1 - pow(2, -10 * sep)
def get_slide_track(distance):
    """
    根据滑动距离生成滑动轨迹
    :param distance: 需要滑动的距离
    :return: 滑动轨迹<type 'list'>: [[x,y,t], ...]
        x: 已滑动的横向距离
        y: 已滑动的纵向距离, 除起点外, 均为0
        t: 滑动过程消耗的时间, 单位: 毫秒
    """
    if not isinstance(distance, int) or distance < 0:
        raise ValueError(f"distance类型必须是大于等于0的整数: distance: {distance}, type: {type(distance)}")
    # 初始化轨迹列表
    slide_track = [
        [random.randint(-50, -10), random.randint(-50, -10), 0],
        [0, 0, 0],
    ]
    # 共记录count次滑块位置信息
    count = 30 + int(distance / 2)
    # 初始化滑动时间
    t = random.randint(50, 100)
    # 记录上一次滑动的距离
    _x = 0
    _y = 0
    for i in range(count):
        # 已滑动的横向距离
        x = round(__ease_out_expo(i / count) * distance)
        # 滑动过程消耗的时间
        t += random.randint(10, 20)
        if x == _x:
            continue
        slide_track.append([x, _y, t])
        _x = x
    slide_track.append([distance, 0, t])
    return slide_track, t

# print(get_slide_track(288))



# 滑动轨迹模拟算法2
def generate_slide_track(distance, total_time=3000, step_ms=40):
    """
    生成滑块轨迹数据，格式类似：
    [
      [-39, -35, 0],
      [0, 0, 0],
      [1, 0, 64],
      ...
      [distance, y, total_time]
    ]

    参数:
    - distance: 滑动的总距离（整数像素）
    - total_time: 总滑动时间，单位毫秒
    - step_ms: 时间步长，轨迹采样间隔，单位毫秒

    返回:
    - track: list，格式为 [[x, y, t], ...]
    """

    track = []
    # 准备动作，负坐标，时间戳0
    track.append([-39, -35, 0])
    track.append([0, 0, 0])

    x = 0
    y = 0
    t = 0

    steps = total_time // step_ms
    mid_step = int(steps * 0.7)

    for i in range(steps):
        # 时间递增
        t += step_ms

        # 模拟加速度阶段
        if i < mid_step:
            # 前70%加速，x增量较大，y小波动
            move_x = random.uniform(distance / steps * 1.1, distance / steps * 1.5)
            move_y = random.uniform(-1, 1)
        else:
            # 后30%减速，x增量减小，y微小负抖动
            move_x = random.uniform(distance / steps * 0.3, distance / steps * 0.7)
            move_y = random.uniform(-3, 0)

        x += move_x
        y += move_y

        # 不超过总距离
        if x > distance:
            x = distance

        track.append([round(x), round(y), t])

        if x >= distance:
            break

    # 最终确保最后一点时间戳是total_time，x是distance
    if track[-1][0] != distance or track[-1][2] != total_time:
        track.append([distance, round(y), total_time])

    return track
"""
# 示例调用
if __name__ == "__main__":
    dist = 288  # 你给的轨迹最大x是288
    track = generate_slide_track(dist)
    for point in track:
        print(point)
"""














