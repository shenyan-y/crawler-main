function hook_RegisterNatives() {
    //1 加载安卓手机底层包，系统自带的库，我们hook的RegisterNatives在这个包中  RegisterNatives  newStringUTF 都在这个包里
    var symbols = Module.enumerateSymbolsSync("libart.so");
    //2 定义一个变量，用来接收一会找到的addrRegisterNatives的地址
    var addrRegisterNatives = null;
    // 3 循环找到RegisterNatives的地址，赋值给变量
    //注意：此处可能找出多个RegisterNatives的地址，由于咱们是for循环，会把之前的覆盖掉，所有如果hook没反应，尝试加break，使用第一个找到的
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (symbol.name.indexOf("art") >= 0 &&
            symbol.name.indexOf("JNI") >= 0 &&
            symbol.name.indexOf("RegisterNatives") >= 0 &&
            symbol.name.indexOf("CheckJNI") < 0) {
            addrRegisterNatives = symbol.address;
            console.log("RegisterNatives is at ", symbol.address, symbol.name);
            break
        }

    }
    // 4 找到后开始hook
    if (addrRegisterNatives != null) {
        Interceptor.attach(addrRegisterNatives, {
            // 4.1 当进入RegisterNatives时执行
            // RegisterNatives(env, clazz, gMethods, 2);
            // RegisterNatives(env, 类型, Java和C的对应关系,个数)
            onEnter: function (args) {

                // 4.2 第0个参数是env
                var env = args[0];
                // 4.3 第1个参数是类型
                var java_class = args[1];
                 // 4.4 通过类型得到具体的类名
                var class_name = Java.vm.tryGetEnv().getClassName(java_class);
                //console.log(class_name);
                // 只有类名为com.bilibili.nativelibrary.LibBili，才打印输出
                var taget_class = "com.bilibili.nativelibrary.LibBili";
                if (class_name === taget_class) {
                    //4.5  只有类名为com.bilibili.nativelibrary.LibBili，再取出第四个参数
                    console.log("\n[RegisterNatives] method_count:", args[3]);
                    // 4.6 第2个参数是：Java和C的对应关系，我们转成指针
                    /*
                    static JNINativeMethod gMethods[] = {
                            {"add", "(III)I", (void *) plus},
                            {"add", "(II)I", (void *) plus},
                            {"add", "(II)I", (void *) plus},
                    };
                     */
                    var methods_ptr = ptr(args[2]);
                    // 4.7 java和c函数对应关系的个数
                    var method_count = parseInt(args[3]);
                    // 4.8 我们循环这个个数，依次移动指针methods_ptr，通过readPointer，往后读取 {"add", "(III)I", (void *) plus}，依次读出Java中函数名字，签名和C中的函数指针
                    for (var i = 0; i < method_count; i++) {
                        // 4.8.1 读取Java中函数名字的
                        var name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));
                        // 4.8.2 读取签名， 参数和返回值类型
                        var sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));
                        // 4.8.3 读取 C中的函数指针
                        var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));

                        // 4.8.4 读取java中函数名 字符串名
                        var name = Memory.readCString(name_ptr);
                        // 4.8.5 参数和返回值类型 字符串名
                        var sig = Memory.readCString(sig_ptr);
                        // 4.5.6 根据C中函数指针获取模块
                        var find_module = Process.findModuleByAddress(fnPtr_ptr); // 根据C中函数指针获取模块


                        // 4.8.7 得到该函数的偏移量：ptr(fnPtr_ptr)函数在内存中的地址   减去   该so文件的基地址(find_module.base)====得到偏移量
                        // 地址：函数在内存中的地址
                        // 偏移量：后期单独打开so文件后，可以根据偏移量 定位到函数位置
                        // 基地址：当前so文件从那个位置开始算地址
                        var offset = ptr(fnPtr_ptr).sub(find_module.base)
                        // console.log("[RegisterNatives] java_class:", class_name);
                        // 4.8.8 输出 函数名      参数和返回值类型    模块    偏移量
                        console.log("name:", name, "sig:", sig, "module_name:", find_module.name, "offset:", offset);

                    }
                }
            }
        });
    }
}

setImmediate(hook_RegisterNatives);

// 以spawn方式运行
// frida -U -f tv.danmaku.bili -l 7-hook--RegisterNatives找到具体方法.js


/*
name: a sig: (Ljava/lang/String;)Ljava/lang/String; module_name: libbili.so offset: 0x1c7d
name: ao sig: (Ljava/lang/String;II)Ljava/lang/String; module_name: libbili.so offset: 0x1c83
name: b sig: (Ljava/lang/String;)Ljavax/crypto/spec/IvParameterSpec; module_name: libbili.so offset: 0x1c91
# s 对应的c中的函数--》打印出了偏移量0x1c97---》根据偏移量去ida中找到函数--》jump--->jump address 输入地址
name: s sig: (Ljava/util/SortedMap;)Lcom/bilibili/nativelibrary/SignedQuery; module_name: libbili.so offset: 0x1c97
name: so sig: (Ljava/util/SortedMap;II)Lcom/bilibili/nativelibrary/SignedQuery; module_name: libbili.so offset: 0x1c9d
name: so sig: (Ljava/util/SortedMap;[B)Lcom/bilibili/nativelibrary/SignedQuery; module_name: libbili.so offset: 0x1cab
name: getCpuCount sig: ()I module_name: libbili.so offset: 0x1cb3
name: getCpuId sig: ()I module_name: libbili.so offset: 0x1cb7


 */

