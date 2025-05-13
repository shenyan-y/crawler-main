function bytesToHex(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        var tmp = arr[i];
        if (tmp < 0) {
            tmp = (255 + tmp + 1).toString(16);
        } else {
            tmp = tmp.toString(16);
        }
        if (tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
}
function bytesToBase64(e) {
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e[a++],
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}
function bytesToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}
function bytesToUtf8(arr) {
    const utf8Bytes = new Uint8Array(arr);
    const decoder = new TextDecoder('utf-8');
    const decodedString = decoder.decode(utf8Bytes);
    return decodedString
}

function main() {

    Java.perform(function () {
        console.log('========================开始==============================')


        // var MessageDigest = Java.use("java.security.MessageDigest")
        // MessageDigest.getInstance.overload('java.lang.String').implementation = function (a) {
        //     console.log("[*]算法是--》" + a + "《---")
        //     return this.getInstance(a)
        // }
        // MessageDigest.update.overload('byte').implementation = function (a) {
        //     console.log(a)
        //     return this.update(a)
        // }
        // MessageDigest.update.overload('java.nio.ByteBuffer').implementation = function (a) {
        //     return this.update(a)
        // }
        // // 字节码  string.getBytes
        // MessageDigest.update.overload('[B').implementation = function (a) {
        //     console.log("=============================================")
        //     send("update算法传参---》" + bytesToString(a) + "《---")
        //     return this.update(a)
        // }
        // MessageDigest.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        //     console.log("=============================================")
        //     send("update--->" + bytesToString(a) + "|" + b + "|" + c)
        //     return this.update(a)
        // }
        // MessageDigest.digest.overload().implementation = function () {
        //     console.log("=============================================")
        //     var result = this.digest()
        //     send("digest结果（hex）--》" + bytesToHex(result))
        //     send("digest结果（base64）--》" + bytesToBase64(result))
        //     send("digest结果（string）--》" + bytesToString(result))
        //     return result;
        // }
        // MessageDigest.digest.overload('[B').implementation = function (arg) {
        //     console.log("=============================================")
        //     send("digest算法传参---》" + bytesToString(arg) + "《---")
        //     var result = this.digest(arg)
        //     send("digest结果（hex）--》" + bytesToHex(result))
        //     send("digest结果（base64）--》" + bytesToBase64(result))
        //     send("digest结果（string）--》" + bytesToString(result))
        //     return result;
        // }


        // // 处理对称算法  对于算法还原  需要知道  明文  key  iv 模式
        // var Cipher = Java.use("javax.crypto.Cipher")
        // Cipher.getInstance.overload('java.lang.String').implementation = function (a) {
        //     var result = this.getInstance(a)
        //     console.log("=======================================")
        //     send("填充模式---》" + a + "《---")
        //     return result
        // }
        // Cipher.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
        //     var result = this.getInstance(a, b)
        //     console.log("=======================================")
        //     send("填充模式---》" + a + "《---" + "|" + b)
        //     return result
        // }


        // var DESKeySpec = Java.use("javax.crypto.spec.DESKeySpec")
        // DESKeySpec.$init.overload('[B').implementation = function (a){
        //        console.log("=============================================")
        //        send("密钥文件是---》" + bytesToString(a) + "《---")
        //        send("密钥文件是---》" + bytesToHex(a) + "《---")
        //        send("密钥文件是---》" + bytesToBase64(a) + "《---")
        //        return  this.$init(a)
        // }


        var SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
        SecretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
            console.log("=============================================")
            send("算法名:" + b + "|String密钥--》" + bytesToString(a) + "《---")
            send("算法名:" + b + "|HEX密钥--》" + bytesToHex(a) + "《---")
            send("算法名:" + b + "|Base64密钥--》" + bytesToBase64(a) + "《---")
            return this.$init(a, b)
        }


        // // 操作 iv 偏移量
        // var IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec")
        // IvParameterSpec.$init.overload('[B').implementation = function (arg) {
        //     console.log("=============================================")
        //     send("|IV偏移量（String）--》" + bytesToString(arg) + "《---")
        //     send("|IV偏移量（HEX）--》" + bytesToHex(arg) + "《---")
        //     // send("|IV偏移量（Base64）--》" + bytesToBase64(arg) + "《---")
        //     var result = this.$init(arg)
        //     return result
        // }
        // Cipher.update.overload('[B').implementation = function (arg) {
        //     console.log("=============================================")
        //     send("update入参 --》--》" + bytesToString(arg) + "《---")
        //     var result = this.update(arg)
        //     return result
        // }
        // Cipher.update.overload('[B', 'int', 'int').implementation = function (arg, b, c) {
        //     console.log("=============================================")
        //     send("update入参 --》" + bytesToString(arg) + "《---" + "|" + b + "|" + c)
        //     var result = this.update(arg, b, c)
        //     return result
        // }
        // Cipher.doFinal.overload().implementation = function () {
        //     var result = this.doFinal()
        //     send("doFinal加密结果（hex）--》" + bytesToHex(result))
        //     send("doFinal加密结果（base64）--》" + bytesToBase64(result))
        //     return result
        // }
        // Cipher.doFinal.overload('[B').implementation = function (arg) {
        //     console.log("=============================================")
        //     var alg = this.getAlgorithm();
        //     console.log(alg)
        //     send(alg + "-doFinal入参 --》" + bytesToString(arg) + "《---")
        //     var result = this.doFinal(arg)
        //     send(alg + "-digest结果（hex）--》" + bytesToHex(result))
        //     send(alg + "-digest结果（base64）--》" + bytesToBase64(result))
        //     return result
        // }


        var mac = Java.use("javax.crypto.Mac")
        // mac.init.overload('javax.crypto.SecretKey').implementation = function (key) {
        //     var keyBytes = key.getEncoded();
        //     send("【密钥 Base64】" + bytesToBase64(keyBytes));
        //     return this.init(key);
        // }
        // mac.update.overload('[B').implementation = function (arg) {
        //     console.log("=============================================")
        //     var alg = this.getAlgorithm();
        //     console.log(alg)
        //     send(alg + "-update入参 --》--》" + bytesToString(arg) + "《---")
        //     var result = this.update(arg)
        //     return result
        // }
        // mac.update.overload('[B', 'int', 'int').implementation = function (arg, b, c) {
        //     console.log("=============================================")
        //     send("MAC update入参 --》" + bytesToString(arg) + "《---" + "|" + b + "|" + c)
        //     var result = this.update(arg, b, c)
        //     return result
        // }
        // mac.doFinal.overload().implementation = function () {
        //     console.log("=============================================")
        //     var alg = this.getAlgorithm();
        //     var result = this.doFinal()
        //     send(alg + "-doFinal加密结果（hex）--》" + bytesToHex(result))
        //     send(alg + "-doFinal加密结果（base64）--》" + bytesToBase64(result))
        //     return result
        // }
        mac.doFinal.overload('[B').implementation = function (arg) {
            console.log("=============================================")
            var alg = this.getAlgorithm();
            send(alg + "-doFinal入参 --》" + bytesToString(arg) + "《---")
            var result = this.doFinal(arg)
            send(alg + "-digest结果（hex）--》" + bytesToHex(result))
            send(alg + "-digest结果（base64）--》" + bytesToBase64(result))
            return result
        }


        // // RSA算法  密钥文件  加密之后的结果
        // // 尝试下base64
        // var b64 = Java.use("android.util.Base64")
        // b64.decode.overload('java.lang.String', 'int').implementation = function (a, b) {
        //     send("b64接受入参--》" + a + "***|*" + b)
        //     return this.decode(a, b)
        // }


        // var X509EncodedKeySpec = Java.use("java.security.spec.X509EncodedKeySpec")
        // X509EncodedKeySpec.$init.overload('[B').implementation = function (a) {
        //     var res = this.$init(a)
        //     console.log("=============获取公钥文件=================")
        //     send("RSA 密钥：" + bytesToBase64(a))
        //     return res
        // }


        console.log('========================结束==============================')
    })

}


setImmediate(main)


