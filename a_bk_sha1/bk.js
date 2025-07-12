Java.perform(function () {
    console.log("hook 注入")


    // 定位 authorization 位置
    let HeaderInterceptor = Java.use("com.bk.base.netimpl.interceptor.d");
    HeaderInterceptor["signRequest"].implementation = function (builder, request) {
        // console.log(`HeaderInterceptor.signRequest is called: builder=${builder}, request=${request}`);
        let result = this["signRequest"](builder, request);
        console.log(`HeaderInterceptor.signRequest result=${result}`);
        return result;
    };


    // 跟进去分析
    let HttpUtil = Java.use("com.bk.base.netimpl.a");
    HttpUtil["getSignString"].implementation = function (str, map2) {

        var it = map2.keySet().iterator();
        let results = "";
        while (it.hasNext()) {
            var keystr = it.next().toString();
            var valuestr = map2.get(keystr).toString();
            results += keystr + valuestr + "        ";
        }
        // console.log("参数2： " + results);

        // console.log(`HttpUtil.getSignString is called: str=${str}, map2=${map2}`);
        let result = this["getSignString"](str, map2);
        console.log(`HttpUtil.getSignString result=${result}`);
        return result;
    };



    let DeviceUtil = Java.use("com.bk.base.util.bk.DeviceUtil");
    DeviceUtil["SHA1ToString"].implementation = function (str) {
        // console.log(`DeviceUtil.SHA1ToString is called: str=${str}`);
        let result = this["SHA1ToString"](str);
        console.log(`DeviceUtil.SHA1ToString result=${result}`);
        return result;
    };



    let MainRouterApi = Java.use("com.bk.base.router.ModuleRouterApi$MainRouterApi");
    MainRouterApi["getHttpAppId"].implementation = function () {
        console.log(`MainRouterApi.getHttpAppId is called`);
        let result = this["getHttpAppId"]();
        console.log(`MainRouterApi.getHttpAppId result=${result}`);
        return result;
    };


    let LjLogUtil = Java.use("com.bk.base.util.bk.LjLogUtil");
    LjLogUtil["d"].overload('java.lang.String', 'java.lang.String').implementation = function (str, str2) {
        // console.log(`LjLogUtil.m6429d is called: str=${str}, str2=${str2}`);
        this["d"](str, str2);
    };


})


/*
*
* HeaderInterceptor.signRequest is called: builder=okhttp3.Request$Builder@7b57188, request=Request{method=GET, url=https://app.api.ke.com/house/ershoufang/detailpart0v1?houseCode=107108694481&cityId=310000&fb_expo_id=788884163884445708&demandForm=preload&communityId=5011000018050, tags={}}
HeaderInterceptor.signRequest result=MjAxODAxMTFfYW5kcm9pZDoyZmUxYmFhZmY3ZWI3ZWFjNTQ3YTYyMmRjMDYxNzRhNGIyN2EyY2I0

*
*
*
https://app.api.ke.com/api/secondhand/ershoufang/homepagesearch?condition=&refer=homepage&containerType=0&feedQueryId=1C06-0129-AAA7-862B-093C3F153DC6&from=default_list&cityId=310000&page=4

 sha1 (str=d5e343d453aecca8b14b2dc687c381cacityId=310000communityId=5011000013192demandForm=preloadfb_expo_id=788885408347029566houseCode=107108703793)

*
*
* */


