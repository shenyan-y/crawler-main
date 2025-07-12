function showStacks() {
    Java.perform(function () {
        console.log(Java.use("android.util.Log").getStackTraceString(
            Java.use("java.lang.Throwable").$new()
        ));
    })
}


function hook_sort() {

    var Collections = Java.use('java.util.Collections');
    // Hook sort() 方法
    Collections.sort.overload("java.util.List").implementation = function (list) {
        console.log('Hooked Collections.sort()');
        console.log('List: ' + list.toString());
        // 可在此处对参数进行修改或记录
        // 使用 Java.cast 进行类型转换 将list转换成ArrayList类型
        var res = Java.cast(list, Java.use("java.util.ArrayList"))
        console.log('List list-->', res)
        // 调用原始的 sort() 方法
        // 从这里看堆栈 找源码出现的位置
        return this.sort(list);
    };

    Collections.sort.overload("java.util.List", "java.util.Comparator").implementation = function (a, b) {
        console.log('Hooked Collections.sort()');
        var res = Java.cast(a, Java.use("java.util.ArrayList"))
        console.log('Comparator list-->', res)
        return this.sort(a, b);
    };

}


function hook_json() {

    console.log("===============hook json ================")
    var JSONObject = Java.use('org.json.JSONObject');
    // Hook JSONObject.put() 方法
    JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function (key, value) {
        console.log('Hooked JSONObject.put()');
        console.log('Key: ' + key.toString());
        // console.log('Value: ' + value.toString());
        // 可在此处对参数进行修改或记录
        // 调用原始的put()方法
        // if (key == "Encrypt") {
        // showStacks()
        // }
        return this.put(key, value);
    };

    // Hook JSONObject.getString() 方法  从json里面取值
    JSONObject.getString.overload('java.lang.String').implementation = function (key) {
        console.log('Hooked JSONObject.getString()');
        console.log('Key: ' + key.toString());
        // 调用原始的getString()方法
        //     showStacks()
        var result = this.getString(key);
        // 可在此处对返回值进行修改或记录
        return result;
    };

}


function get_String() {
    var StringClass = Java.use('java.lang.String');
    // Hook String 类的构造函数
    StringClass.getBytes.overload().implementation = function () {
        console.log('Original Value');
        // 可在此处修改传入的字符串参数
        var res = this.getBytes();
        var newString = StringClass.$new(res)
        // 输出修改后的值
        console.log('Modified Value: ' + newString);
        return res;
    };

    // Hook String 类的静态方法
    StringClass.getBytes.overload('java.lang.String').implementation = function (obj) {
        console.log('Hooked String.valueOf()');
        // 可在此处修改传入的对象参数
        var res = this.getBytes(obj);
        var newString = StringClass.$new(res, obj)
        // 输出修改后的结果
        console.log('getBytes: ' + newString)
        return res
    }

}


function hook_StringBuilder() {

    var stringBuilderClass = Java.use("java.lang.StringBuilder");
    stringBuilderClass.toString.implementation = function () {
        var res = this.toString.apply(this, arguments)
        // if (res.includes("_sig")){
        //     showStacks()
        // }

        return res
    }

    // let ApiSignatureHelper = Java.use("com.douban.frodo.network.ApiSignatureHelper");
    // ApiSignatureHelper["a"].overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (str, str2, str3) {
    //     console.log(`ApiSignatureHelper.m28657a is called: str=${str}, str2=${str2}, str3=${str3}`);
    //     let result = this["a"](str, str2, str3);
    //     console.log(`ApiSignatureHelper.m28657a result=${result}`);
    //     return result;
    // };

}


function hook_map() {
    // x-sign azU7Bc002xAAJJhyJJMu4ASzvvba9Jh0k2Ka8h%2FWY7yB3EhmEjArtZZiSF32SGizyIqF9Cdk4fgLflwAyEXccDkwOuSYZJh0mGSYdJ
    var hashMap = Java.use("java.util.HashMap");
    hashMap.put.implementation = function (a, b) {
        // console.log('输出--》', a, b)
        // if (a == "x-sign"){
        //     showStacks() // !!!
        //     debugger;
        // }
        return this.put(a, b)
    }
}


Java.perform(function () {

    hook_map()

    // hook_StringBuilder()
    // get_String()
    // hook_json()

    // var btn_login_id = Java.use("com.dodonew.online.R$id").btn_login.value;
    // var View = Java.use('android.view.View');
    // View.setOnClickListener.implementation = function (listener) {
    //
    //     if (this.getId() === btn_login_id) {
    //         showStacks()
    //         console.log("view.id-->" + this.getId())
    //     }
    //     // 调用原始的setOnClickListener方法
    //     return this.setOnClickListener(listener);
    // };


    // var TextUtils = Java.use("android.text.TextUtils");
    // TextUtils.isEmpty.implementation = function (aa) {
    //     console.log('TextUtils--》', aa)
    //     if (aa == "2v+DC2gq7RuAC8PE5GZz5wH3/y9ZVcWhFwhDY9L19g9iEd075+Q7xwewvfIN0g0ec/NaaF43/S0=") {
    //         showStacks();
    //     }
    //     return this.isEmpty(aa)
    // }


    // let RequestUtil = Java.use("com.dodonew.online.http.RequestUtil");
    // RequestUtil["decodeDesJson"].implementation = function (json, desKey, desIV) {
    //     console.log(`RequestUtil.decodeDesJson is called: json=${json}, desKey=${desKey}, desIV=${desIV}`);
    //     let result = this["decodeDesJson"](json, desKey, desIV);
    //     console.log(`RequestUtil.decodeDesJson result=${result}`);
    //     return result;
    // };


})





