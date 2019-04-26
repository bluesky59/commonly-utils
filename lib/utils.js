const CryptoJS = require('crypto-js');

// 加密
const encodePwd = (params, secretKey, iv) => {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const encrypted = CryptoJS.AES.encrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

// url获取参数
const decodePwd = (url) => {
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
const aesDecodeParams = (params, secretKey, iv) => {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const decrypted = CryptoJS.AES.decrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypted).toString();
}

// 获取uuid
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

// json根据某个key值排序
const sortByKey = (json, key) => {
  return json.sort((a,b) => {
    return new Date(a[key]).getTime() - new Date(b[key]).getTime();
  });
}

// 数组合并
const arrCombine = (arr1, arr2) => {
  const result = arr1.map(item1 => {
    return Object.assign(item1, arr2.find(item2 => {
      return item2 && item1.name === item2.name
    }))
  })
  return result;
}

// 数组根据指定层级扁平化
const arrFlat = (arr, num = 1) => {
  switch (num){
    case 1: {
      return arr.reduce((prev, curr) => {
        return prev.concat(curr);
      }, []);
    }
    case 'infinite': {
      return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? arrFlat(curr, 'infinite') : curr);
      }, []);
    }
    default: {
      return arr.reduce((prev, curr) => {
        return prev.concat(Array.isArray(curr) ? arrFlat(curr, --num) : curr);
      }, []);
    }
  }
}

// 有序数组变成随机无序数组
const arrSort = (arr) => {
  return arr.sort(() => {
    return Math.random() - 0.5;
  })
}

module.exports = {
  encodePwd,
  decodePwd,
  aesDecodeParams,
  uuid,
  sortByKey,
  arrCombine,
  arrFlat,
  arrSort,
};