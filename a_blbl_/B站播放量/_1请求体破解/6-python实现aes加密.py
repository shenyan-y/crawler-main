from Crypto.Cipher import AES
from Crypto.Util.Padding import pad

KEY = "fd6b639dbcff0c2a1b03b389ec763c4b"
IV = "77b07a672d57d64c"

def aes_encrypt(data_string):
    aes = AES.new(
        key=KEY.encode('utf-8'),
        mode=AES.MODE_CBC,
        iv=IV.encode('utf-8')
    )
    raw = pad(data_string.encode('utf-8'), 16)
    return aes.encrypt(raw)


data = "aid=968620643&auto_play=0&build=6240300&cid=202261238&did=fU52TixILBQlEicfLk93Tw9fNk4rR3UtYQ&epid=329002&from_spmid=tm.recommend.feed.bangumi&ftime=1704374954&lv=0&mid=0&mobi_app=android&part=0&sid=4340&spmid=pgc.pgc-video-detail.0.0&stime=1704374611&sub_type=1&type=4&sign=4021718af1f29a2279dbcd7d4098a50cc042d8b69e6233c8e517592d598a403d"

# 字节类型
bytes_data = aes_encrypt(data)

result = [item for item in bytes_data]
print(result)# 输出的是字节数组