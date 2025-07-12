//1 加载安卓手机底层包，系统自带的库，我们hook的NewStringUTF在这个包中--跟app无关
var symbols = Module.enumerateSymbolsSync("libart.so");  // 有非常多底层 函数：NewStringUTF，FindClass。。
//2 定义一个变量，用来接收一会找到的NewStringUTF的地址
var addrNewStringUTF = null;
//3 循环找出libart.so中所有成员，匹配是NewStringUTF的函数，取出地址，赋值给上面的变量
for (var i = 0; i < symbols.length; i++) {
    //3.1 取出libart.so的一个个方法对象
    var symbol = symbols[i];
    //3.2 判断方法对象的名字是不是包含 NewStringUTF和CheckJNI---》因为在真正底层，函数名不叫NewStringUTF，前后有别的字符串
    // 实际它真正的名字：asdfa_NewStringUTF_dadsfasfd
    if (symbol.name.indexOf("NewStringUTF") >= 0 && symbol.name.indexOf("CheckJNI") < 0) {
        // 3.3 找到后，把地址赋值个上面的变量
        addrNewStringUTF = symbol.address;
        // 3.4 控制台打印一下
        console.log("NewStringUTF is at ", symbol.address, symbol.name);
        break
    }
}
// 4 如果不为空，我们开始hook它(通过地址hook，有onEnter和onExit，所有的参数都给了args，通过位置取到每个参数)
if (addrNewStringUTF != null) {
    Interceptor.attach(addrNewStringUTF, {
        onEnter: function (args) {
            // 4.1 取出NewStringUTF传入的第一个参数（c语言的字符串），第0个参数env，对咱们没有意义
            var c_string = args[1];
            // 4.2 第一个参数是c的字符串，我们把它转一下，变成真正的字符串
            var dataString = c_string.readCString();
            // 4.3 改字符串不为空，且长度为32，我们输出一下，并且打印出它的调用栈
            if (dataString) {
                if (dataString.length === 32) {
                    console.log(dataString); // 跟抓包抓到的sign比较是否一样
                    // 4.4 读取当前在执行那个so文件,及so文件中的地址
                    console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
                    // 4.5 打印调用栈
                    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Throwable").$new()));
                }
            }

        }
    });
}


// frida -UF  -l  5-hook-NewStringUTF通用脚本.js -o v1.txt


/*
8d6547c501a5c90609d176ab174b9b8b  # 咱们抓包抓的sign
9ee3bbe91032ad03f16bdcadbe1aa3a5
0xb6f751a5 libbili.so!0x31a5     # 看到了是用哪个so文件执行得到的：libbili.so --》so文件中那个函数执行得到的：0x31a5
0xaafd907b base.odex!0x1c107b

java.lang.Throwable
	at com.bilibili.nativelibrary.LibBili.s(Native Method)
	at com.bilibili.nativelibrary.LibBili.g(BL:1)
	at com.bilibili.okretro.f.a.h(BL:1)
	at com.bilibili.okretro.f.a.c(BL:14)
	at com.bilibili.okretro.f.a.a(BL:6)
	at com.bilibili.okretro.d.a.execute(BL:24)
	at com.bilibili.okretro.d.a$a.run(BL:2)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1167)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:641)
	at java.lang.Thread.run(Thread.java:923)

 */