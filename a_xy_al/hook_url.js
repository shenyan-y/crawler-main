

function showStacks() {
    Java.perform(function () {
        console.log("----------------------------------------------------------------------------------------------\n");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log("----------------------------------------------------------------------------------------------\n");
    });
}

Java.perform(function () {
    // Hook url 初始化类
    const url = Java.use("java.net.URL");
    url.$init.overload('java.lang.String').implementation = function (v1) {
        //这里判断一下接口请求地址是否包含xxxxxxxxx
        // if (v1.indexOf("/client?") > 0) {
            console.log(v1);
            showStacks();
        // }
        return this.$init(v1);
    }

})

// frida -Uf -l 1.js
