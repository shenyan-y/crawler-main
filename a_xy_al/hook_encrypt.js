Java.perform(function () {

    let InnerSignImpl = Java.use("mtopsdk.security.InnerSignImpl");
    InnerSignImpl["getUnifiedSign"].implementation = function (params, ext, appKey, authCode, useWua, requestId) {
        console.log(`InnerSignImpl.getUnifiedSign is called: params=${params}, ext=${ext}, appKey=${appKey}, authCode=${authCode}, useWua=${useWua}, requestId=${requestId}`);
        let result = this["getUnifiedSign"](params, ext, appKey, authCode, useWua, requestId);
        console.log(`InnerSignImpl.getUnifiedSign result=${result}`);
        return result;
    };
})




