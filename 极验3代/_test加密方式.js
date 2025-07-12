// npm install crypto-js
var CryptoJS = require("crypto-js");


// ============== 一、MD5 加密（不可逆）===============================================================
// 常用于生成签名、校验完整性。加密后无法还原。


// let text = "123456";
// let md5Hash = CryptoJS.MD5(text).toString();
//
// console.log("MD5:", md5Hash); // 输出：e10adc3949ba59abbe56e057f20f883e



// ============== 二、SHA1 / SHA256 加密（不可逆）===============================================================
// 比 MD5 更安全。也用于签名与摘要。


// let sha1 = CryptoJS.SHA1("123456").toString();
// let sha256 = CryptoJS.SHA256("123456").toString();
//
// console.log("SHA1:", sha1);
// console.log("SHA256:", sha256);



// ============== 三、HMAC（带密钥的哈希）===============================================================
// 用于更安全的签名验证，常见于 API 签名机制。


// let key = "my_secret_key";
// let message = "hello world";
//
// // HMAC-SHA256
// let hmac = CryptoJS.HmacSHA256(message, key).toString();
// console.log("HMAC-SHA256:", hmac);


// ============== 四、AES 对称加密 & 解密（可还原）===============================================================
// 加密数据时使用密码，常用于前端登录密码加密等。



// 4.1 使用默认参数，走的是默认的 CBC 模式 + 自动生成随机 IV（不可控） + 密钥是字符串。
// let text = "hello world";
// let key = "my_secret_key";
//
// // 加密
// let encrypted = CryptoJS.AES.encrypt(text, key).toString();
// console.log("AES 加密:", encrypted);
//
// // 解密
// let decrypted = CryptoJS.AES.decrypt(encrypted, key);
// let originalText = decrypted.toString(CryptoJS.enc.Utf8);
// console.log("AES 解密:", originalText); // hello world



// 4.2 显式指定了 CBC 模式、自定义 IV 和 Key（WordArray 类型），更安全也更适合还原加密逻辑。
let key = CryptoJS.enc.Utf8.parse("b46aa7d653765f98"); // 16个字节
let iv  = CryptoJS.enc.Utf8.parse("0000000000000000");

let text = '{"gt":"019924a82c70bb123aae90d483087f94","challenge":"553737eb8bf17224c879e24c48ae41ac","offline":false,"new_captcha":true,"product":"popup","width":"300px","https":true,"api_server":"apiv6.geetest.com","protocol":"https://","type":"fullpage","static_servers":["static.geetest.com/","static.geevisit.com/"],"beeline":"/static/js/beeline.1.0.1.js","voice":"/static/js/voice.1.2.6.js","click":"/static/js/click.3.1.2.js","fullpage":"/static/js/fullpage.9.2.0-cf92nc.js","slide":"/static/js/slide.7.9.3.js","geetest":"/static/js/geetest.6.0.9.js","aspect_radio":{"slide":103,"click":128,"voice":128,"beeline":50},"cc":20,"ww":true,"i":"-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1!!-1"}';

let encrypted = CryptoJS.AES.encrypt(text, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
}).toString();
// .ciphertext  .toString()

console.log("加密:", encrypted);

// 解密
let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log("解密:", decrypted.toString(CryptoJS.enc.Utf8));










// ============== 五、Base64 编解码（可还原）===============================================================
// 不是加密，只是编码转换。


// // 编码
// let wordArray = CryptoJS.enc.Utf8.parse("hello");
// let base64 = CryptoJS.enc.Base64.stringify(wordArray);
// console.log("Base64 编码:", base64); // SGVsbG8=
//
// // 解码
// let parsed = CryptoJS.enc.Base64.parse(base64);
// let decoded = parsed.toString(CryptoJS.enc.Utf8);
// console.log("Base64 解码:", decoded); // hello


// ============== 六、字符串与 WordArray 转换（编码解码常用）===============================================================


// // 把字符串转成 CryptoJS 内部格式（WordArray）：
// let word = CryptoJS.enc.Utf8.parse("abc"); // 字符串 => WordArray
//
// // 把 WordArray 转回字符串：
// let str = word.toString(CryptoJS.enc.Utf8); // WordArray => 字符串








