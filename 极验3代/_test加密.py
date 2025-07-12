
def rsa_encrypt(text, pubKey, modules):
    """
    rsa 加密
    :param text: 文本
    :param pubKey: 公钥
    :param modules: 加密系数
    :return:
    """
    import rsa
    pubKey = rsa.PublicKey(int(modules, 16), int(pubKey, 16)) # rsa库公钥形式
    rs = rsa.encrypt(text.encode(), pubKey)
    return rs.hex()




