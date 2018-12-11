'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  function _default(inDataMapping, inGroups) {
    _classCallCheck(this, _default);

    this.dataMapping = inDataMapping || {};
    this.groups = inGroups || [];
  }

  _createClass(_default, [{
    key: 'add',
    value: function add(inMapping, inGroup) {
      this.dataMapping = Object.assign(this.dataMapping, inMapping);
      this.groups.push(inGroup);
      return this;
    }
  }, {
    key: 'addMulti',
    value: function addMulti(inMapping, inGroups) {
      this.dataMapping = Object.assign(this.dataMapping, inMapping);
      this.groups = [].concat(this.groups, inGroups);
      return this;
    }
  }, {
    key: 'remove',
    value: function remove(inKey) {
      var _this = this;

      if (typeof inKey !== 'string') {
        throw new Error('Remove only accept a string.');
      }

      delete this.dataMapping[inKey];
      var groups = this.groups.slice(0);
      groups.forEach(function (group, groupIndex) {
        var index = group.indexOf(inKey);
        if (index > -1) {
          group.splice(index, 1);
        }
        if (group.length === 0) {
          _this.groups.splice(groupIndex, 1);
        }
      });
      return this;
    }
  }, {
    key: 'removeMulti',
    value: function removeMulti(inKeys) {
      var _this2 = this;

      if (!Array.isArray(inKeys)) {
        throw new Error('RemoveMulti only accept an array.');
      }
      inKeys.forEach(function (item) {
        _this2.remove(item);
      });
      return this;
    }
  }, {
    key: 'convert',
    value: function convert() {
      var rst = [];
      var dataMapping = this.dataMapping;
      var length = this.groups.length;

      Object.keys(dataMapping).forEach(function (item) {
        var _loop = function _loop(i) {
          dataMapping[item].forEach(function (dataItem) {
            dataItem['g' + (i + 1)] = null;
          });
        };

        for (var i = 0; i < length; i++) {
          _loop(i);
        }
      });

      this.groups.forEach(function (group, index) {
        group.forEach(function (dataKey) {
          dataMapping[dataKey].forEach(function (dataItem) {
            dataItem['g' + (index + 1)] = dataItem.value;
            dataItem.groupIndex = index;
            rst.push(dataItem);
          });
        });
      });
      return rst;
    }
  }]);

  return _default;
}();

exports.default = _default;