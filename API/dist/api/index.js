"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("./resources/users/user.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restRouter = _express["default"].Router();

exports.restRouter = restRouter;
restRouter.use('/users', _user.userRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ1c2VyUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxVQUFVLEdBQUNDLG9CQUFRQyxNQUFSLEVBQWpCOzs7QUFDUEYsVUFBVSxDQUFDRyxHQUFYLENBQWUsUUFBZixFQUF3QkMsZ0JBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7VXNlclJvdXRlciwgdXNlclJvdXRlcn0gZnJvbSAnLi9yZXNvdXJjZXMvdXNlcnMvdXNlci5yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXI9ZXhwcmVzcy5Sb3V0ZXIoKTtcclxucmVzdFJvdXRlci51c2UoJy91c2VycycsdXNlclJvdXRlcik7Il19