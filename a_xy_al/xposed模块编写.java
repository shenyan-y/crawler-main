package com.example.sdpy_xposed;
import android.util.Log; 
import de.robv.android.xposed.XC_MethodHook; 
import de.robv.android.xposed.XposedHelpers;
import de.robv.android.xposed.IXposedHookLoadPackage; 
import de.robv.android.xposed.callbacks.XC_LoadPackage.LoadPackageParam;

// 使用Charles、Fiddle等抓包工具对淘系App进行抓包时，会发现总是抓不到包，出现请求不走 Charles代理的情况。
// 这是因为淘系app底层网络通信的协议并不是普通的http协议，而是自己实现的一套私有协议Spdy。
// xposed模块编写
public class Hook implements IXposedHookLoadPackage {
  public void handleLoadPackage(final LoadPackageParam lpparam) throws Throwable {
    Log.d("XP", "模块挂载中......"); 
    if (lpparam.packageName.equals("com.taobao.idlefish")) {
      Log.i("XP", "进入apk");
      Class<?> clazz = XposedHelpers.findClass("mtopsdk.mtop.global.SwitchConfig", lpparam.classLoader);XposedHelpers.findAndHookMethod(clazz, "A", new XC_MethodHook() {
        public void beforeHookedMethod(MethodHookParam param) throws Throwable {
          Log.i("XP", "isSocketConnected 已被Hook"); 
          param.setResult((Object) false);
          }
      });
    };
  }
}
