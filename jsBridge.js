class jsBridge {
  // 交互
  skipToMaintenance() {
    const type = this.judgeOs();
    if (type.ios) {
      window.webkit.messageHandlers.JSBridge.openMaintenance();
    } else if (type.android){
      window.JSBridge.openMaintenance();
    }
  }

  // 判断系统类型
  judgeOs() {
    const u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') === -1
    };
  }
}

export default new jsBridge();
