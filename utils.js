const CryptoJS = require('crypto-js');
const iv = '+Y43$6273:](5=54';
const secretKey = 'H626&9&3_#3<59=@';

// 加密
const encodePwd = function (params) {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const encrypted = CryptoJS.AES.encrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

// url获取参数
const decodePwd = function (url) {
  const baseInfo = {
    vin: '',
    token: '',
    aid: '',
    gps_longitude: '',
    gps_latitude: '',
    screen_width: '',
    screen_height: '',
  };
  const urlArr = url.substring(url.indexOf('?') + 1).split('&');
  const urlObj = [];
  for (let i = 0; i < urlArr.length; i++) {
    urlObj.push(urlArr[i].split('='));
  }
  for (const key in baseInfo) {
    for (let k = 0; k < urlObj.length; k++) {
      if (key === urlObj[k][0]) {
        baseInfo[key] = aesDecodeParams(decodeURIComponent(urlObj[k][1]).replace(/ /g, "+")); // 加密
      }
    }
  }
  return baseInfo;
}

// 解密
const aesDecodeParams = function (params) {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const decrypted = CryptoJS.AES.decrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypted).toString();
}

// 获取uuid
const uuid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

// json根据某个key值排序
const sort = function () {
  const json = [
    {
      label: '2018-06-21',
      hourArr: [ 8, 9, 10 ],
    },
    {
      label: '2018-06-16',
      hourArr: [ 8, 9, 10 ],
    },
    {
      label: '2018-06-19',
      hourArr: [ 18, 19, 20 ],
    },
    {
      label: '2018-05-19',
      hourArr: [ 18, 19, 20 ],
    }
  ];
  return json.sort((a,b) => {
    return new Date(a.label).getTime() - new Date(b.label).getTime();
  });
}

// 数组合并
const arrCombine = function () {
  const arr1 = [
    {
      name: '张三',
      age: '',
      sex: '',
    },
    {
      name: '李四',
      age: '',
      sex: '',
    },
    {
      name: '王五',
      age: '',
      sex: '',
    },
  ];
  const arr2 = [
    {
      name: '张三',
      age: 20,
      sex: 'M',
    },
    {
      name: '李四',
      age: 30,
      sex: 'M',
    },
  ];
  const result = arr1.map(item1 => {
    return Object.assign(item1, arr2.find(item2 => {
      return item2 && item1.name === item2.name
    }))
  })
  return result;
}