export default class {

  constructor(inDataMapping, inGroups) {
    this.dataMapping = inDataMapping || {};
    this.groups = inGroups || [];
  }

  add(inMapping, inGroup) {
    this.dataMapping = Object.assign(this.dataMapping, inMapping);
    this.groups.push(inGroup);
    return this;
  }

  addMulti(inMapping, inGroups) {
    this.dataMapping = Object.assign(this.dataMapping, inMapping);
    this.groups = [].concat(this.groups, inGroups);
    return this;
  }

  remove(inKey) {
    if (typeof inKey !== 'string') {
      throw new Error('Remove only accept a string.')
    }

    delete this.dataMapping[inKey];
    const groups = this.groups.slice(0);
    groups.forEach((group, groupIndex) => {
      const index = group.indexOf(inKey);
      if (index > -1) {
        group.splice(index, 1);
      }
      if (group.length === 0) {
        this.groups.splice(groupIndex, 1)
      }
    })
    return this;
  }

  removeMulti(inKeys) {
    if (!Array.isArray(inKeys)) {
      throw new Error('RemoveMulti only accept an array.')
    }
    inKeys.forEach(item => {
      this.remove(item);
    });
    return this;
  }

  convert() {
    const rst = [];
    const dataMapping = this.dataMapping;
    const length = this.groups.length;

    Object.keys(dataMapping).forEach(item => {
      for (let i = 0; i < length; i++) {
        dataMapping[item].forEach(dataItem => {
          dataItem[`g${i + 1}`] = null;
        })
      }
    });

    this.groups.forEach((group, index) => {
      group.forEach(dataKey => {
        dataMapping[dataKey].forEach(dataItem => {
          dataItem[`g${index + 1}`] = dataItem.value;
          dataItem.groupIndex = index;
          rst.push(dataItem);
        });
      });
    })
    return rst;
  }
}
