// 绕过代理检测
Java.perform(function () {
    var System = Java.use("java.lang.System");
    System.getProperty.overload('java.lang.String').implementation = function (name) {
        if (name === "http.proxyHost" || name === "http.proxyPort") {
            return null;  // 模拟无代理
        }
        return this.getProperty(name);
    };
});


// Hook OkHttp 发起请求的位置
Java.perform(function () {
    var RequestBuilder = Java.use('okhttp3.Request$Builder');
    RequestBuilder.url.overload('java.lang.String').implementation = function (url) {
        console.log('URL:', url);
        return this.url(url);
    };
});

function main() {

    // // 绕过代理检测
    // Java.perform(function () {
    //     var System = Java.use("java.lang.System");
    //     System.getProperty.overload('java.lang.String').implementation = function (name) {
    //         if (name === "http.proxyHost" || name === "http.proxyPort") {
    //             return null;  // 模拟无代理
    //         }
    //         return this.getProperty(name);
    //     };
    // });

    // // Hook OkHttp 发起请求的位置
    // Java.perform(function () {
    //     var RequestBuilder = Java.use('okhttp3.Request$Builder');
    //     RequestBuilder.url.overload('java.lang.String').implementation = function (url) {
    //         console.log('URL:', url);
    //         return this.url(url);
    //     };
    // });

    // // 强制 OkHttp 请求走 Charles 代理
    // Java.perform(function () {
    //     var Proxy = Java.use("java.net.Proxy");
    //     var InetSocketAddress = Java.use("java.net.InetSocketAddress");
    //
    //     var proxyHost = "192.168.1.8";  // 替换为你的 Charles 代理 IP
    //     var proxyPort = 8888;
    //
    //     var ProxyConstructor = Java.use("okhttp3.OkHttpClient$Builder").proxy;
    //     ProxyConstructor.implementation = function (proxy) {
    //         console.log("===> Hooked proxy setting, forcing Charles proxy");
    //         var newProxy = Proxy.$new(Proxy.Type.HTTP.value, InetSocketAddress.$new(proxyHost, proxyPort));
    //         return this.proxy(newProxy);
    //     };
    // });

    // Java.perform(function () {
    //     var RequestBuilder = Java.use('okhttp3.Request$Builder');
    //     RequestBuilder.url.overload('java.lang.String').implementation = function (url) {
    //         console.log('URL intercepted:', url);
    //         return this.url(url);
    //     };
    //
    //     var RealCall = Java.use('okhttp3.RealCall');
    //     RealCall.execute.implementation = function () {
    //         console.log("===> Executing request");
    //         var response = this.execute();
    //         console.log("Response code: " + response.code());
    //         return response;
    //     };
    // });


    Java.perform(function () {
    var RequestBody = Java.use('okhttp3.RequestBody');
    var Buffer = Java.use('okio.Buffer');

    // 打印 POST 请求体
    RequestBody.writeTo.implementation = function (sink) {
        var buffer = Buffer.$new();
        this.writeTo(buffer);
        console.log('📦 请求体:\n' + buffer.readUtf8());
        this.writeTo(sink);
    };

    // 打印响应体
    var ResponseBody = Java.use('okhttp3.ResponseBody');
    ResponseBody.string.implementation = function () {
        var bodyStr = this.string();
        console.log('📥 响应体:\n' + bodyStr);
        return bodyStr;
    };
});

}

setImmediate(main)