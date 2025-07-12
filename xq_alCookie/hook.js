
(function () {
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf('acw_sc__v2') != -1) {
        debugger;
      }
      console.log('Hook捕获到cookie设置->', val);
      return val;
    }
  });
})();



Function.prototype.__constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function() {
    if(arguments && typeof arguments[0]==='string'){
        if("debugger" === arguments[0]){
            return
        }
    }
   return Function.prototype.__constructor_back.apply(this,arguments);
}











