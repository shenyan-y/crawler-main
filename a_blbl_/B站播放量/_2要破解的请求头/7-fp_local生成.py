import hashlib
import datetime
import random


def gen_local_v1(buvid, phone_model, phone_band):
    """
    fp_local和fp_remote都是用这个算法来生成的，在手机初始化阶段生成 fp_local
    :param buvid: 根据算法生成的buvid，例如："XYBA4F3B2789A879EA8AEEDBE2E4118F78303"
    :param phone_model:  手机型号modal，例如："Mate 10 Pro"
    :param phone_band:  手机品牌band，在模拟器上是空字符串（我猜是程序员想要写成 brand ）哈哈哈哈
    """

    def misc_helper_kt(data_bytes):
        data_list = []
        v7 = len(data_bytes)
        v0 = 0
        while v0 < v7:
            v2 = data_bytes[v0]
            data_list.append("%02x" % v2)
            v0 += 1
        return ''.join(data_list)

    data_string = "{}{}{}".format(buvid, phone_model, phone_band)
    hash_object = hashlib.md5()
    hash_object.update(data_string.encode('utf-8'))
    data = hash_object.digest()

    arg1 = misc_helper_kt(data)
    arg2 = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    #arg3 = misc_helper_kt(random.randbytes(8))  # python3.9可以
    arg3 = misc_helper_kt([random.randint(1, 255) for i in range(8)])

    return "{}{}{}".format(arg1, arg2, arg3)


def a_b(arg8):
    v3 = 0
    v4 = 60
    v0_1 = 2
    v5 = 0
    while True:
        v6 = arg8[v3:v3 + 2]
        v5 += int(v6, base=16)
        if v3 != v4:
            v3 += v0_1
            continue
        break
    data = "%02x" % (v5 % 0x100,)
    return data


str2 = gen_local_v1("XWA4D7EA36A3DF451437AB7E2F5D7790D2159", "Mate 10 Pro", "")
fp_local = str2 + a_b(str2)
print(fp_local)

# bba3e31a2783df01d7ce36ecd03492d3  20240109224506 b0c05cf7eff16a21fe
# 2cbf1dbb4af112fafc0a754f02011305  20240109224542  9bd3a5f2b2e69a2e4b