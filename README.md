# f2-group-converter
> F2 group data converter.


## install:
```bash
npm install -S afeiship/f2-group-converter --registry=https://registry.npm.taobao.org
```

## apis:
<img width="500" src="https://ws4.sinaimg.cn/large/006tNbRwgy1fy2othq1hzj30my0nmabn.jpg" />

## usage:
```js
import F2GroupConverter from './src';

const data1 = [
  { year: '1951', value: 38, type: 's1' },
  { year: '1952', value: 16, type: 's1' },
];

const data2 = [
  { year: '1951', value: 12, type: 's2' },
  { year: '1952', value: 18, type: 's2' },
];

const data3 = [
  { year: '1951', value: 12, type: 's3' },
  { year: '1952', value: 18, type: 's3' },
];

const data4 = [
  { year: '1951', value: 12, type: 's4' },
  { year: '1952', value: 18, type: 's4' },
];

const converter = new F2GroupConverter();

// group1:
converter.add({ data1,data2 },['data1','data2'])

// group2:
converter.add({ data3 },['data3']);

//group3:
converter.add({ data4 },['data4']);

converter.remove('data1');

// result:
[{
    year: '1951',
    value: 12,
    type: 's2',
    g1: 12,
    g2: null,
    g3: null,
    groupIndex: 0
},
{
    year: '1952',
    value: 18,
    type: 's2',
    g1: 18,
    g2: null,
    g3: null,
    groupIndex: 0
},
{
    year: '1951',
    value: 12,
    type: 's3',
    g1: null,
    g2: 12,
    g3: null,
    groupIndex: 1
},
{
    year: '1952',
    value: 18,
    type: 's3',
    g1: null,
    g2: 18,
    g3: null,
    groupIndex: 1
},
{
    year: '1951',
    value: 12,
    type: 's4',
    g1: null,
    g2: null,
    g3: 12,
    groupIndex: 2
},
{
    year: '1952',
    value: 18,
    type: 's4',
    g1: null,
    g2: null,
    g3: 18,
    groupIndex: 2
}]
```
