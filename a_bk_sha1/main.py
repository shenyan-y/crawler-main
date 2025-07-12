# -*- coding: utf-8 -*-
import base64

import requests

# 翻页参数变换 wll-kgsa   authorization   x-req-id   解决的   authorization
headers = {
    "Host": "app.api.ke.com",
    # "x-req-id": "c9d03250-ce79-4225-a6e4-41541dc1dd47",
    "page-schema": "newhouse%2Fhomeindex%2Fnew",
    "extension": "lj_duid=DuodvlzehCIT5rkHNWANkWO2Z1I0cuExN3b5WIjO/4c/rkkrn4LgrH2a40IaJIinPv5na4e9ZaSG+TFGyUBxfgjg&lianjia_device_id=eae248efb0cb50c9&mac_id=DE:0D:E1:E3:EC:10",
    "parentsceneid": "2034490618288862977",
    "beikebasedata": "%7B%22appVersion%22%3A%222.66.0%22%2C%22duid%22%3A%22DuodvlzehCIT5rkHNWANkWO2Z1I0cuExN3b5WIjO%2F4c%2Frkkrn4LgrH2a40IaJIinPv5na4e9ZaSG%2BTFGyUBxfgjg%22%2C%22fpid%22%3A%22020102w1uCxIH74zE6VNciioSmAbw%2BnH3Jd0%2BLiCg%2B3J1ZwyyrqEq%2FsW44OSfJ0ibBObk2YwC8%2BQSzXInVJhCeMo10iQ%5Cu003d%5Cu003d%22%7D",
    "user-agent": "Beike2.66.0;google Pixel+4; Android 10",
    "lianjia-channel": "Android_ke_tencentt",
    "lianjia-device-id": "eae248efb0cb50c9",
    "device-info": "scale=2.75;screenwidth=1080;screenheight=2236",
    "lianjia-city-id": "310000",
    "lianjia-version": "2.66.0",
    # 需要携带  会变
    "authorization": "MjAxODAxMTFfYW5kcm9pZDplMzNiMmM4YWUzYTYwZDM5ZWZiODNmM2QwNTZjNjE1NTIwNGRmYTQ0",
    "lianjia-im-version": "1.3.3",
    "lianjia-nh-ab": "",
    "device-id-s": "eae248efb0cb50c9;DuodvlzehCIT5rkHNWANkWO2Z1I0cuExN3b5WIjO/4c/rkkrn4LgrH2a40IaJIinPv5na4e9ZaSG+TFGyUBxfgjg;020102w1uCxIH74zE6VNciioSmAbw+nH3Jd0+LiCg+3J1ZwyyrqEq/sW44OSfJ0ibBObk2YwC8+QSzXInVJhCeMo10iQ==",
    "channel-s": "Android_ke_tencentt",
    "appinfo-s": "Beike;2.66.0;2660100",
    "hardware-s": "google;Pixel 4",
    "systeminfo-s": "android;10",
    # "wll-kgsa": "LJAPPVA accessKeyId=sjoe98HI099dhdD7; nonce=AFLq6lxQysh5MsQ2evQZDbUgLkUSuG5c; timestamp=1702818766; signedHeaders=Device-id-s,User-Agent,AppInfo-s,Hardware-s,Channel-s,SystemInfo-s; signature=30wm5hvQ5Mb89xE0uov1UXsdhrN3eHU0MxZ/rDkP5HY="
}
cookies = {
    "lianjia_udid": "eae248efb0cb50c9",
    "lianjia_ssid": "858b2496-84f1-4bea-a1be-782417636b66",
    "lianjia_uuid": "d6840374-74f8-4e04-9f7c-d89b7d4ab894",
    "longitude": "112.884507",
    "latitude": "28.216676"
}
url = "https://app.api.ke.com/house/ershoufang/detailpart0v1"
data = {
    "houseCode": "107108411240",
    "cityId": "310000",
    "fb_expo_id": "775028262900269122",
    "demandForm": "preload",
    "communityId": "5011000013862"

}


sorted_data = ''.join([f"{key}={data[key]}" for key in sorted(data.keys())])
se_data = "d5e343d453aecca8b14b2dc687c381ca" + sorted_data

import hashlib,base64
sha1_value = hashlib.sha1(se_data.encode('utf-8')).hexdigest()
auth = base64.b64encode(f"20180111_android:{sha1_value}".encode('utf-8')).decode('utf-8')
print(auth)
headers['authorization'] = auth
response = requests.get(url, headers=headers, cookies=cookies, params=data)

print(response.text)
print(response)
