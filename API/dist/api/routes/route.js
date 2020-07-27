"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var router = express.Router();
exports.router = router;
router.get('/users', _user["default"].findAll);
router.post('/users', _user["default"].create);
router.get('/users/:id', _user["default"].findOne);
router["delete"]('/users/:id', _user["default"].deleteOne);
router.put('/users/:id', _user["default"].update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL3JvdXRlLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicm91dGVyIiwiUm91dGVyIiwiZ2V0IiwidXNlckNvbnRyb2xsZXIiLCJmaW5kQWxsIiwicG9zdCIsImNyZWF0ZSIsImZpbmRPbmUiLCJkZWxldGVPbmUiLCJwdXQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQURBLElBQU1BLE9BQU8sR0FBQ0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBR08sSUFBTUMsTUFBTSxHQUFDRixPQUFPLENBQUNHLE1BQVIsRUFBYjs7QUFFUEQsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxFQUFvQkMsaUJBQWVDLE9BQW5DO0FBQ0FKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFFBQVosRUFBcUJGLGlCQUFlRyxNQUFwQztBQUNBTixNQUFNLENBQUNFLEdBQVAsQ0FBVyxZQUFYLEVBQXdCQyxpQkFBZUksT0FBdkM7QUFDQVAsTUFBTSxVQUFOLENBQWMsWUFBZCxFQUEyQkcsaUJBQWVLLFNBQTFDO0FBQ0FSLE1BQU0sQ0FBQ1MsR0FBUCxDQUFXLFlBQVgsRUFBd0JOLGlCQUFlTyxNQUF2QyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3M9cmVxdWlyZSgnZXhwcmVzcycpO1xyXG5pbXBvcnQgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXI9ZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy91c2VycycsdXNlckNvbnRyb2xsZXIuZmluZEFsbCk7XHJcbnJvdXRlci5wb3N0KCcvdXNlcnMnLHVzZXJDb250cm9sbGVyLmNyZWF0ZSk7XHJcbnJvdXRlci5nZXQoJy91c2Vycy86aWQnLHVzZXJDb250cm9sbGVyLmZpbmRPbmUpO1xyXG5yb3V0ZXIuZGVsZXRlKCcvdXNlcnMvOmlkJyx1c2VyQ29udHJvbGxlci5kZWxldGVPbmUpO1xyXG5yb3V0ZXIucHV0KCcvdXNlcnMvOmlkJyx1c2VyQ29udHJvbGxlci51cGRhdGUpOyJdfQ==