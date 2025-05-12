

function main(){
    Java.perform(function (){

        var requestUtil = Java.use("com.dodonew.online.http.RequestUtil")
        requestUtil.encodeDesMap.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (str1,str2,str3){
            console.log('str1->',str1)
            console.log('str2->',str2)
            console.log('str3->',str3)
            var res = this.encodeDesMap(str1,str2,str3)
            console.log('res-->' + res)
            return res
        }

        // 标准得md5算法
        var urils = Java.use("com.dodonew.online.util.Utils")
        urils.md5.implementation = function (arg){
            console.log("sign明文--》" + arg)
            var res1 = this.md5(arg)
            console.log("sign---> " + res1)
            return res1
        }


})
}

setImmediate(main)

// frida -UF -l hook.js




// sign明文--》equtype=ANDROID&loginImei=Androidnull&timeStamp=1747065451591&userPwd=sjwhhwhw&username=13694676446&key=sdlkjsdljf0j2fsjk
// sign---> 9075961f9b404c1f0a5e7ed6de2b9be7
// str1-> {"equtype":"ANDROID","loginImei":"Androidnull","sign":"9075961F9B404C1F0A5E7ED6DE2B9BE7","timeStamp":"1747065451591","userPwd":"sjwhhwhw","username":"13694676446"}
// str2-> 65102933
// str3-> 32028092
// res-->NIszaqFPos1vd0pFqKlB42Np5itPxaNH//FDsRnlBfgL4lcVxjXii/UNcdXYMk0E3JyUwtn6aafZ
// jguUJarNDD5qTcD+h+EZQp4x+2IhNNzUfdDKER2HPKa/G8uhPoaWzhYz3FVapWoc1cofT/6H2qS9
// ZqVYd4PEp57/Tc1ORyMFh5jDADTQIOO5vQqpPCSAdz6rL9Rk2QEvfo9v6KmavVwFb1ThxeeE