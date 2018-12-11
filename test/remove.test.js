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

test('Remove method only accept a string', () => {
  const converter = new F2GroupConverter(
    { data1, data2, data3, data4 },
    [['data1'], ['data2', 'data3'], ['data4']]
  );
  function removeEx() {
    converter.remove(['data2']).convert()
  }
  expect(removeEx).toThrow()
})

test('Remove method only accept an array', () => {
  const converter = new F2GroupConverter(
    { data1, data2, data3, data4 },
    [['data1'], ['data2', 'data3'], ['data4']]
  );
  function removeEx() {
    converter.removeMulti('data2').convert()
  }
  expect(removeEx).toThrow()
})



test('Remove should not have this data key: s1', () => {
  const converter = new F2GroupConverter(
    { data1, data2, data3, data4 },
    [['data1'], ['data2', 'data3'], ['data4']]
  );

  const dataRes = converter.remove('data2').convert()
  const types = dataRes.map(item => item.type);

  expect(types.indexOf('s2')).toBe(-1);
  expect(converter.dataMapping['s2']).toBeUndefined();
})

test('remove a data with its group', () => {
  const converter = new F2GroupConverter(
    { data1, data2, data3, data4 },
    [['data1'], ['data2', 'data3'], ['data4']]
  );

  const dataRes = converter.removeMulti(['data2', 'data3']).convert()
  const types = dataRes.map(item => item.type);

  expect(converter.dataMapping['s2']).toBeUndefined();
  expect(converter.dataMapping['s3']).toBeUndefined();
  expect(types.indexOf('s1')).not.toBe(-1)
  expect(types.indexOf('s4')).not.toBe(1)
  expect(types.indexOf('s2')).toBe(-1);
  expect(types.indexOf('s3')).toBe(-1);
})

