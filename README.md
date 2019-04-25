## 工具函数类别

#### 拦截器
    axios拦截器配置，主要是get/post传参的统一处理，以及针对服务器端响应的处理，包括token的刷新或是强行退出重新登陆

#### jsBridge类
    跟原生的交互处理，暂时包括系统类型判断/互调处理

#### 地图
    地图类方法，目前只有腾讯地图的初始化/绘点处理，后期考虑引入更多的功能：
    譬如：
        1） 多地图切换
        2） 轨迹回放
        。。。

#### gsp纠偏
    gps纠偏的方法，处理经纬度

#### 常用工具方法
    囊括工作应用中最常见的工具函数方法：
    如下：
    1） 加密
    2） 解密
    3） 获取url上面的参数
    4） 生成uuid
    5） json根据某个固定的key排序
    6） 数组合并
    7） 数组根据指定层级扁平化
    8） 有序数组打乱，生成随机无序数组
    
    后期会根据实际情况考虑引入更多的工具函数，以保证尽可能规避引入多个第三方插件
    
## 使用方法

#### 安装
    yarn add common-utils
    npm install common-utils

#### 引入
    const utilColl = require('common-utils');

#### 使用
    utilsColl.utils.arrFlat([3,2,1, [4,5,6]], 2);  // 数组扁平化

#### 详情参考：https://github.com/bluesky59/commonly-utils