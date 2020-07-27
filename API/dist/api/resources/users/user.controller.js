"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = _interopRequireDefault(require("./user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _user["default"].find().then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "Invalid ID : emp not found"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  deleteOne: function deleteOne(req, res) {
    var id = req.params.id;

    _user["default"].findByIdAndRemove(id).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "Invalid ID : emp not deleted"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        email = _req$body.email,
        role = _req$body.role,
        amount = _req$body.amount,
        password = _req$body.password;

    if (!name) {
      return res.status(400).json({
        err: "name is required"
      });
    }

    if (!email) {
      return res.status(400).json({
        err: "salary is required"
      });
    }

    if (!role) {
      return res.status(400).json({
        err: "no is required"
      });
    }

    if (!amount) {
      return res.status(400).json({
        err: "role is required"
      });
    }

    if (!password) {
      return res.status(400).json({
        err: "age is required"
      });
    }

    _user["default"].create({
      name: name,
      email: email,
      role: role,
      amount: amount,
      password: password
    }).then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _user["default"].findOneAndUpdate({
      _id: id
    }, {
      $set: req.body
    }, {
      "new": true
    }).then(function (emp) {
      if (!emp) {
        return res.status(400).json({
          err: "emp not updated"
        });
      }

      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  signup: function signup(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _userService$validati, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error));

            case 4:
              _context.next = 6;
              return _user["default"].create(value).then(function (item) {
                return res.json(item);
              })["catch"](function (err) {
                return res.status(500).json(err);
              });

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }))();
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiVXNlciIsImZpbmQiLCJ0aGVuIiwiZW1wIiwianNvbiIsImVyciIsInN0YXR1cyIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiZGVsZXRlT25lIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJjcmVhdGUiLCJib2R5IiwibmFtZSIsImVtYWlsIiwicm9sZSIsImFtb3VudCIsInBhc3N3b3JkIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJzaWdudXAiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDWkMscUJBQUtDLElBQUwsR0FBWUMsSUFBWixDQUFpQixVQUFBQyxHQUFHO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELEdBQVQsQ0FBRjtBQUFBLEtBQXBCLFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUVOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFGO0FBQUEsS0FEVjtBQUVILEdBSlM7QUFLVkUsRUFBQUEsT0FMVSxtQkFLRlQsR0FMRSxFQUtFQyxHQUxGLEVBS007QUFDWixRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDQVIscUJBQUtVLFFBQUwsQ0FBY0YsRUFBZCxFQUFrQk4sSUFBbEIsQ0FBdUIsVUFBQUMsR0FBRyxFQUFFO0FBQ3hCLFVBQUcsQ0FBQ0EsR0FBSixFQUFRO0FB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S0FBSyxDQUFDRSxPQUhMO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUlGOUIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJ1QixLQUFyQixDQUpFOztBQUFBO0FBQUE7QUFBQSxxQkFPUDNCLGlCQUFLYSxNQUFMLENBQVllLEtBQVosRUFDTDFCLElBREssQ0FDQSxVQUFBNEIsSUFBSTtBQUFBLHVCQUFJL0IsR0FBRyxDQUFDSyxJQUFKLENBQVMwQixJQUFULENBQUo7QUFBQSxlQURKLFdBRUMsVUFBQXpCLEdBQUc7QUFBQSx1QkFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxlQUZKLENBUE87O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdiMEIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQVhhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXBCO0FBckVTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXIubW9kZWwnO1xyXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5leHBvcnQgZGVmYXVsdHtcclxuICAgIGZpbmRBbGwocmVxLHJlcyl7XHJcbiAgICAgICAgVXNlci5maW5kKCkudGhlbihlbXA9PnJlcy5qc29uKGVtcCkpXHJcbiAgICAgICAgLmNhdGNoKGVycj0+cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgVXNlci5maW5kQnlJZChpZCkudGhlbihlbXA9PntcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIkludmFsaWQgSUQgOiBlbXAgbm90IGZvdW5kXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PnJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlT25lKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZDtcclxuICAgICAgICBVc2VyLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKS50aGVuKGVtcD0+e1xyXG4gICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiSW52YWxpZCBJRCA6IGVtcCBub3QgZGVsZXRlZFwifSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT5yZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZShyZXEscmVzKXtcclxuICAgICAgICBsZXR7bmFtZSxlbWFpbCxyb2xlLGFtb3VudCxwYXNzd29yZH09cmVxLmJvZHk7XHJcbiAgICAgICAgaWYoIW5hbWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIm5hbWUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZW1haWwpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInNhbGFyeSBpcyByZXF1aXJlZFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFyb2xlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJubyBpcyByZXF1aXJlZFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFhbW91bnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInJvbGUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGFzc3dvcmQpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImFnZSBpcyByZXF1aXJlZFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXIuY3JlYXRlKHtuYW1lLGVtYWlsLHJvbGUsYW1vdW50LHBhc3N3b3JkfSlcclxuICAgICAgICAudGhlbihlbXA9PnJlcy5qc29uKGVtcCkpXHJcbiAgICAgICAgLmNhdGNoKGVycj0+cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xyXG4gICAgICAgIGNvbnN0IGlkPXJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgVXNlci5maW5kT25lQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OnRydWV9KS50aGVuKGVtcCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlbXApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJlbXAgbm90IHVwZGF0ZWRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzaWdudXAocmVxLHJlcyl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsdmFsdWV9ID0gdXNlclNlcnZpY2UudmFsaWRhdGlvblNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihpdGVtID0+IHJlcy5qc29uKGl0ZW0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiXX0=