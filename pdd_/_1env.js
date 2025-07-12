window = global;

delete global;
delete Buffer;

document = {
    addEventListener: function () {},
    cookie: '_nano_fp=XpmyX0Eyn0EJXpTon9_ryk2GUF8jzVuDLOQX7_CH; api_uid=U84pHWhY3vxUeUAesdvjAg=='
}

screen = {
    availWidth: 1707,
    availHeight: 1019
}

navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36",
    webdriver: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36'
}


history = {
    back: function () {}

}

location = {
    "ancestorOrigins": {},
    "href": "https://www.pinduoduo.com/home/home/",
    "origin": "https://www.pinduoduo.com",
    "protocol": "https:",
    "host": "www.pinduoduo.com",
    "hostname": "www.pinduoduo.com",
    "port": "",
    "pathname": "/home/home/",
    "search": "",
    "hash": ""
}




// function browser_proxy(obj) {
//
//     return new Proxy(obj, {
//         get: function (target, property, receiver) {
//             //debugger;
//             console.log("get: ", obj, property, target[property]);
//             return target[property];
//         },
//         set: function (target, property, value) {
//             //debugger;
//             console.log("set: ", obj, property);
//             return Reflect.set(...arguments);
//         },
//     })
// }
//
// window = browser_proxy(window);
// document = browser_proxy(document);
// navigator = browser_proxy(navigator);
// screen = browser_proxy(screen);
// history = browser_proxy(history);
// location = browser_proxy(location);




