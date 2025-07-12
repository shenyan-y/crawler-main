# python 3.9及以后
import random
session_id = "".join([hex(item)[2:] for item in random.randbytes(4)])
print(session_id)


# python 3.8及以前
import random
session_id = "".join([hex(random.randint(0,255))[2:] for i in range(4)])
print(session_id)