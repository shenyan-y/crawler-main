const CryptoJS = require('crypto-js');

function eIe(t) {
    const e = "uVayqL4ONKjFbVzQ"; // 密钥
    const key = CryptoJS.enc.Utf8.parse(e);

    const decrypted = CryptoJS.AES.decrypt(t, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    try {
        return JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
    } catch (err) {
        return t;
    }
}

const encryptedText = "U2FsdGVkX1+......";  // 用目标页面获取的密文
const result = eIe(encryptedText);
console.log(result);
