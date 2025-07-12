import hashlib

data = "aid=968620643&auto_play=0&build=6240300&cid=202261238&did=fU52TixILBQlEicfLk93Tw9fNk4rR3UtYQ&epid=329002&from_spmid=tm.recommend.feed.bangumi&ftime=1704374954&lv=0&mid=0&mobi_app=android&part=0&sid=4340&spmid=pgc.pgc-video-detail.0.0&stime=1704374611&sub_type=1&type=4"

salt = "9cafa6466a028bfb"
obj = hashlib.sha256()
obj.update(data.encode('utf-8'))
obj.update(salt.encode('utf-8'))

res = obj.hexdigest()
print(res)