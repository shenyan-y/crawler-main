
// 使用Charles、Fiddle等抓包工具对淘系App进行抓包时，
// 会发现总是抓不到包，出现请求不走 Charles代理的情况。
// 这是因为淘系app底层网络通信的协议并不是普通的http协议，
// 而是自己实现的一套私有协议Spdy。
// 使用Frida处理一下
Java.perform(function () {
    var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig');
    SwitchConfig.A.overload().implementation = function () {
        return false;
    }
});
// 然后使用命令 frida -U -l Spdy.js




