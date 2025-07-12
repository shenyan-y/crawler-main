# 正常app也是可以返回aid和cid的，但是之前在web端破解过这个，我们因为要刷自己的视频，地址是知道的，所以直接获得即可
import requests
import json
import re

header = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
}
res = requests.get("https://www.bilibili.com/video/BV1Y9uMzDE9T/?spm_id_from=333.337.search-card.all.click&vd_source=86ae76f4cc29967345e3a9ffe9f8c01f",
                   headers=header)

# # data_list = re.findall(r'var options = (.+);', res.text)
# data_list = re.findall(r'"availableVideoList": \[(.+), \{', res.text)
#
# data_dict = json.loads(data_list[0])
# aid = data_dict['aid']
# cid = data_dict['cid']
# print(aid)
# print(cid)

match1 = re.search(r'30\.jpg"},"stat":\{"aid":(\d+)', res.text)
aid = match1.group(1)
match2 = re.search(r':"","cid":(\d+)', res.text)
cid = match2.group(1)
print(aid)
print(cid)
