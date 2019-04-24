const CryptoJS = require('crypto-js');
const iv = '+Y43$6273:](5=54';
const secretKey = 'H626&9&3_#3<59=@';
let arr = [ 1, 2, 3, 4, 5, 6 ];

// 加密
export const encodePwd = function (params) {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const encrypted = CryptoJS.AES.encrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

// url获取参数
export const decodePwd = function (url) {
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
export const aesDecodeParams = function (params) {
  const keyHex = CryptoJS.enc.Utf8.parse(secretKey);
  const decrypted = CryptoJS.AES.decrypt(params, keyHex, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypted).toString();
}

// 获取uuid
export const uuid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

// json根据某个key值排序
export const sort = function () {
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
export const arrCombine = function () {
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

// 数组根据指定层级扁平化
export const arrFlat = (arr, num = 1) => {
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

// console.log(arrFlat(arr, 1));
// console.log(arrFlat(arr, 2));
// console.log(arrFlat(arr, 'infinite'));

// 有序数组变成随机无序数组
export const arrSort = (arr) => {
  return arr.sort(() => {
    return Math.random() - 0.5;
  })
}

// console.log(arrSort(arr));

// 防抖
export const throttle = () =>{

}

// 去掉空格

// 时间格式化



