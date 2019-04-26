const tool = require('./index');
const iv = '+Y43$6273:](5=54';
const secretKey = 'H626&9&3_#3<59=@';
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

// 此处为utils内工具方法的使用示例
// console.log(tool.utils.arrFlat([1,2,3,4,[5,6,7]]));
// console.log(tool.utils.encodePwd('hello', secretKey, iv));
// console.log(tool.utils.sortByKey(json, 'label'));
// console.log(tool.utils.arrCombine(arr1, arr2));

// 此处为map类方法使用的示例
// console.log(tool.map.test())

// 此处为jsBridge类方法使用的示例
// console.log(tool.jsBridge.skipToMaintenance())