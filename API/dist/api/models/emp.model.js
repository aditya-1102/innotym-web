"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var empSchema = new Schema({
  no: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

var _default = new _mongoose["default"].model('Emp', empSchema, 'employees');

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2VtcC5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsImVtcFNjaGVtYSIsIm5vIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibmFtZSIsInNhbGFyeSIsInJvbGUiLCJhZ2UiLCJnZW5kZXIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFDQyxxQkFBU0QsTUFBdEI7QUFDQSxJQUFNRSxTQUFTLEdBQUcsSUFBSUYsTUFBSixDQUFXO0FBQ3pCRyxFQUFBQSxFQUFFLEVBQUM7QUFDQ0MsSUFBQUEsSUFBSSxFQUFDQyxNQUROO0FBRUNDLElBQUFBLFFBQVEsRUFBQztBQUZWLEdBRHNCO0FBS3pCQyxFQUFBQSxJQUFJLEVBQUM7QUFDREgsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBQztBQUZSLEdBTG9CO0FBU3pCRSxFQUFBQSxNQUFNLEVBQUM7QUFDSEosSUFBQUEsSUFBSSxFQUFDQyxNQURGO0FBRUhDLElBQUFBLFFBQVEsRUFBQztBQUZOLEdBVGtCO0FBYXpCRyxFQUFBQSxJQUFJLEVBQUM7QUFDREwsSUFBQUEsSUFBSSxFQUFDQyxNQURKO0FBRURDLElBQUFBLFFBQVEsRUFBQztBQUZSLEdBYm9CO0FBaUJ6QkksRUFBQUEsR0FBRyxFQUFDO0FBQ0FOLElBQUFBLElBQUksRUFBQ0MsTUFETDtBQUVBQyxJQUFBQSxRQUFRLEVBQUM7QUFGVCxHQWpCcUI7QUFxQnpCSyxFQUFBQSxNQUFNLEVBQUM7QUFDSFAsSUFBQUEsSUFBSSxFQUFDQyxNQURGO0FBRUhDLElBQUFBLFFBQVEsRUFBQztBQUZOO0FBckJrQixDQUFYLENBQWxCOztlQTBCZSxJQUFJTCxxQkFBU1csS0FBYixDQUFtQixLQUFuQixFQUF5QlYsU0FBekIsRUFBbUMsV0FBbkMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IFNjaGVtYT1tb25nb29zZS5TY2hlbWE7XHJcbmNvbnN0IGVtcFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gICAgbm86e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBuYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgc2FsYXJ5OntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9sZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFnZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGdlbmRlcjp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IG1vbmdvb3NlLm1vZGVsKCdFbXAnLGVtcFNjaGVtYSwnZW1wbG95ZWVzJyk7Il19