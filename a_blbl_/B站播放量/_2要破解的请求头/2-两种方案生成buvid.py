
#### mac地址方案
# 第1步：随机生成mac地址
# 第2步：对mac地址进行md5加密
# 第3步：xy + c.e(md5结果) + md5密文
# 	  xy + md5结果[2] + md5结果[12] + md5结果[22] + 结果
# 第4步：变大写

## uuid方案、
# 第1步：生成uuid，去掉中间的 -
# 第2步：xw + c.e(uuid) + uuid
# 	  xy +uuid取了 [2] + [12] + [22] + 结果
# 第3步：变大写

import uuid
import hashlib
import random


def create_random_mac(sep=":"):
    # 00:90:4C:11:22:33
    data_list = []
    for i in range(1, 7):
        part = "".join(random.sample("0123456789ABCDEF", 2))
        data_list.append(part)
    mac = sep.join(data_list)
    return mac


def get_buvid_by_wifi_mac():
    mac = create_random_mac()
    md5 = hashlib.md5()
    md5.update(mac.encode('utf-8'))
    v0_1 = md5.hexdigest()
    return "XY{}{}{}{}".format(v0_1[2], v0_1[12], v0_1[22], v0_1).upper()


if __name__ == '__main__':
    buvid = get_buvid_by_wifi_mac()
    print(buvid)



###uuid方案
import uuid
u=str(uuid.uuid4()).replace('-','')
print("XW{}{}{}{}".format(u[2], u[12], u[22], u).upper())
