// 条件流程性能: Map / Object > switch > if-else
if (type === 1) {
    console.log('这里是第一种可能');
} else if(type === 2) {
    console.log('这里是第二种可能');
} else if(type === 3) {
    console.log('这里是第三种可能');
}

switch (type) {
    case 1: {
        console.log('这里是第一种可能');
        break;
    }
    case 2: {
        console.log('这里是第二种可能');
        break;
    }
    case 3: {
        console.log('这里是第三种可能');
        break;
    }
    default: break;
}

const map = new Map([
    [1, () => { console.log('这里是第一种可能'); }],
    [2, () => { console.log('这里是第二种可能'); }],
    [3, () => { console.log('这里是第三种可能'); }],
])
map.get(2)();

const obj = {
    1: () => { console.log('这里是第一种可能'); },
    2: () => { console.log('这里是第二种可能'); },
    3: () => { console.log('这里是第三种可能'); },
}
obj[3]()