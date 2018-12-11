import F2GroupConverter from '../src';

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

converter.add({ data1, data2 }, ['data1', 'data2'])
converter.add({ data3 }, ['data3']);
converter.add({ data4 }, ['data4']);
converter.remove('data1');


test('docs',()=>{
  converter.convert()
})
