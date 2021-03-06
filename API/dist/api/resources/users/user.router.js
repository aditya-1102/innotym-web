"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _user = _interopRequireDefault(require("./user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var userRouter = express.Router();
exports.userRouter = userRouter;
userRouter.post('/signup', _user["default"].signup);
userRouter.route('/').post(_user["default"].create).get(_user["default"].findAll);
userRouter.route('/:id').get(_user["default"].findOne)["delete"](_user["default"].deleteOne).put(_user["default"].update); // router.get('/users',userController.findAll);
// router.post('/users',userController.create);
// router.get('/users/:id',userController.findOne);
// router.delete('/users/:id',userController.deleteOne);
// router.put('/users/:id',userController.update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIucm91dGVyLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwidXNlclJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJ1c2VyQ29udHJvbGxlciIsInNpZ251cCIsInJvdXRlIiwiY3JlYXRlIiwiZ2V0IiwiZmluZEFsbCIsImZpbmRPbmUiLCJkZWxldGVPbmUiLCJwdXQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQURBLElBQU1BLE9BQU8sR0FBQ0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBR08sSUFBTUMsVUFBVSxHQUFDRixPQUFPLENBQUNHLE1BQVIsRUFBakI7O0FBRVBELFVBQVUsQ0FBQ0UsSUFBWCxDQUFnQixTQUFoQixFQUEwQkMsaUJBQWVDLE1BQXpDO0FBRUFKLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQixHQUFqQixFQUNDSCxJQURELENBQ01DLGlCQUFlRyxNQURyQixFQUVDQyxHQUZELENBRUtKLGlCQUFlSyxPQUZwQjtBQUlBUixVQUFVLENBQUNLLEtBQVgsQ0FBaUIsTUFBakIsRUFDQ0UsR0FERCxDQUNLSixpQkFBZU0sT0FEcEIsWUFFUU4saUJBQWVPLFNBRnZCLEVBR0NDLEdBSEQsQ0FHS1IsaUJBQWVTLE1BSHBCLEUsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcz1yZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tICcuL3VzZXIuY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlclJvdXRlcj1leHByZXNzLlJvdXRlcigpO1xyXG5cclxudXNlclJvdXRlci5wb3N0KCcvc2lnbnVwJyx1c2VyQ29udHJvbGxlci5zaWdudXApO1xyXG5cclxudXNlclJvdXRlci5yb3V0ZSgnLycpXHJcbi5wb3N0KHVzZXJDb250cm9sbGVyLmNyZWF0ZSlcclxuLmdldCh1c2VyQ29udHJvbGxlci5maW5kQWxsKTtcclxuXHJcbnVzZXJSb3V0ZXIucm91dGUoJy86aWQnKVxyXG4uZ2V0KHVzZXJDb250cm9sbGVyLmZpbmRPbmUpXHJcbi5kZWxldGUodXNlckNvbnRyb2xsZXIuZGVsZXRlT25lKVxyXG4ucHV0KHVzZXJDb250cm9sbGVyLnVwZGF0ZSk7XHJcblxyXG4vLyByb3V0ZXIuZ2V0KCcvdXNlcnMnLHVzZXJDb250cm9sbGVyLmZpbmRBbGwpO1xyXG4vLyByb3V0ZXIucG9zdCgnL3VzZXJzJyx1c2VyQ29udHJvbGxlci5jcmVhdGUpO1xyXG4vLyByb3V0ZXIuZ2V0KCcvdXNlcnMvOmlkJyx1c2VyQ29udHJvbGxlci5maW5kT25lKTtcclxuLy8gcm91dGVyLmRlbGV0ZSgnL3VzZXJzLzppZCcsdXNlckNvbnRyb2xsZXIuZGVsZXRlT25lKTtcclxuLy8gcm91dGVyLnB1dCgnL3VzZXJzLzppZCcsdXNlckNvbnRyb2xsZXIudXBkYXRlKTsiXX0=