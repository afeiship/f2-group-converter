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
]




test('mapping should have add 2 records', () => {
  const converter = new F2GroupConverter(
    { data1, data2, data3 },
    [['data1'], ['data2', 'data3']]
  );
  const before = converter.convert();
  const current = converter.add({ data4 }, ['data4']).convert();
  expect(current.length - before.length).toBe(data4.length)
})
