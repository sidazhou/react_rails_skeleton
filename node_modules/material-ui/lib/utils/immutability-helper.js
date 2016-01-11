'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeSingle(objA, objB) {
  if (!objA) return objB;
  if (!objB) return objA;
  return (0, _reactAddonsUpdate2.default)(objA, { $merge: objB });
}

exports.default = {
  merge: function merge() {
    var args = Array.prototype.slice.call(arguments, 0);
    var base = args[0];

    for (var i = 1; i < args.length; i++) {
      if (args[i]) {
        base = mergeSingle(base, args[i]);
      }
    }
    return base;
  },
  mergeItem: function mergeItem(obj, key, newValueObject) {
    var command = {};
    command[key] = { $merge: newValueObject };
    return (0, _reactAddonsUpdate2.default)(obj, command);
  },
  push: function push(array, obj) {
    var newObj = Array.isArray(obj) ? obj : [obj];
    return (0, _reactAddonsUpdate2.default)(array, { $push: newObj });
  },
  shift: function shift(array) {
    return (0, _reactAddonsUpdate2.default)(array, { $splice: [[0, 1]] });
  }
};
module.exports = exports['default'];