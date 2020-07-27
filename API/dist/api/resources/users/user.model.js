"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var empSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

var _default = new _mongoose["default"].model('User', empSchema, 'users');

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJlbXBTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJhbW91bnQiLCJOdW1iZXIiLCJwYXNzd29yZCIsInJvbGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFDQyxxQkFBU0QsTUFBdEI7QUFDQSxJQUFNRSxTQUFTLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBQ3pCRyxFQUFBQSxJQUFJLEVBQUM7QUFDREMsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBQztBQUZSLEdBRG9CO0FBS3pCQyxFQUFBQSxLQUFLLEVBQUM7QUFDRkgsSUFBQUEsSUFBSSxFQUFDQyxNQURIO0FBRUZDLElBQUFBLFFBQVEsRUFBQyxJQUZQO0FBR0ZFLElBQUFBLE1BQU0sRUFBQztBQUhMLEdBTG1CO0FBVXpCQyxFQUFBQSxNQUFNLEVBQUM7QUFDSEwsSUFBQUEsSUFBSSxFQUFDTSxNQURGO0FBRUhKLElBQUFBLFFBQVEsRUFBQztBQUZOLEdBVmtCO0FBY3pCSyxFQUFBQSxRQUFRLEVBQUM7QUFDTFAsSUFBQUEsSUFBSSxFQUFDQyxNQURBO0FBRUxDLElBQUFBLFFBQVEsRUFBQztBQUZKLEdBZGdCO0FBa0J6Qk0sRUFBQUEsSUFBSSxFQUFDO0FBQ0RSLElBQUFBLElBQUksRUFBQ0MsTUFESjtBQUVEQyxJQUFBQSxRQUFRLEVBQUM7QUFGUjtBQWxCb0IsQ0FBWCxDQUFsQjs7ZUF1QmUsSUFBSUwscUJBQVNZLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMEJYLFNBQTFCLEVBQW9DLE9BQXBDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCBTY2hlbWE9bW9uZ29vc2UuU2NoZW1hO1xyXG5jb25zdCBlbXBTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIG5hbWU6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFtb3VudDp7XHJcbiAgICAgICAgdHlwZTpOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9sZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyxlbXBTY2hlbWEsJ3VzZXJzJyk7Il19