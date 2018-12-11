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

const converter = new F2GroupConverter(
  { data1, data2, data3 },
  [['data1'], ['data2'], ['data3']]
);

const dataRes = converter.convert();

test('dataRes should have size(data1+data2+data3)', () => {
  const size1 = data1.length
  const size2 = data2.length
  const size3 = data3.length
  expect(dataRes.length).toBe(size1 + size2 + size3)
});


test('data1 & data1 should hava g1/g2/g3', () => {
  dataRes.forEach(item => {
    expect('g1' in item).toBeTruthy();
    expect('g2' in item).toBeTruthy();
    expect('g3' in item).toBeTruthy();
  })
});


test('g1 in data1 should no be null, g2/g3 shoud be null', () => {
  dataRes.forEach(item => {
    if (item.type === 's1') {
      expect(item.g1).not.toBeNull();
      expect(item.g2).toBeNull();
      expect(item.g3).toBeNull();
    }
  })
});

