"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      name: _joi["default"].string().required(),
      role: _joi["default"].string().required(),
      amount: _joi["default"].number().required()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJuYW1lIiwicm9sZSIsImFtb3VudCIsIm51bWJlciIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFDQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzNCQyxNQUFBQSxLQUFLLEVBQUNILGdCQUFJSSxNQUFKLEdBQWFELEtBQWIsR0FBcUJFLFFBQXJCLEVBRHFCO0FBRTNCQyxNQUFBQSxRQUFRLEVBQUNOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGa0I7QUFHM0JFLE1BQUFBLElBQUksRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUhzQjtBQUkzQkcsTUFBQUEsSUFBSSxFQUFDUixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnNCO0FBSzNCSSxNQUFBQSxNQUFNLEVBQUNULGdCQUFJVSxNQUFKLEdBQWFMLFFBQWI7QUFMb0IsS0FBbEIsQ0FBYjs7QUFEa0Isd0JBUUlMLGdCQUFJVyxRQUFKLENBQWFiLElBQWIsRUFBa0JDLE1BQWxCLENBUko7QUFBQSxRQVFYYSxLQVJXLGlCQVFYQSxLQVJXO0FBQUEsUUFRTEMsS0FSSyxpQkFRTEEsS0FSSzs7QUFTbEIsUUFBR0QsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQWxCLEVBQTBCO0FBQ3RCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFQO0FBQ0g7QUFkUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XHJcbiAgICAgICAgY29uc3Qgc2NoZW1hPUpvaS5vYmplY3QoKS5rZXlzKHtcclxuICAgICAgICAgICAgZW1haWw6Sm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIG5hbWU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIHJvbGU6Sm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgIGFtb3VudDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvcix2YWx1ZX0gPSBKb2kudmFsaWRhdGUoYm9keSxzY2hlbWEpO1xyXG4gICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07XHJcbiAgICB9XHJcbn0iXX0=