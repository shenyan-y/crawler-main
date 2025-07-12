import hashlib
import time
import random
arg0='1704978976694247833'
# arg0=str(int(time.time() * 1000)) + str(random.randint(1, 1000000))
hash_object = hashlib.sha1()
hash_object.update(arg0.encode('utf-8'))
arg7 = hash_object.hexdigest()
print(arg7)
# d47380909bcc362c40a43395e16875a54d7f152e
# d47380909bcc362c40a43395e16875a54d7f152e