"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _emp = _interopRequireDefault(require("../models/emp.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  findAll: function findAll(req, res) {
    _emp["default"].find().then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _emp["default"].findById(id).then(function (emp) {
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

    _emp["default"].findByIdAndRemove(id).then(function (emp) {
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
        no = _req$body.no,
        name = _req$body.name,
        salary = _req$body.salary,
        role = _req$body.role,
        age = _req$body.age,
        gender = _req$body.gender;

    if (!name) {
      return res.status(400).json({
        err: "name is required"
      });
    }

    if (!salary) {
      return res.status(400).json({
        err: "salary is required"
      });
    }

    if (!no) {
      return res.status(400).json({
        err: "no is required"
      });
    }

    if (!role) {
      return res.status(400).json({
        err: "role is required"
      });
    }

    if (!age) {
      return res.status(400).json({
        err: "age is required"
      });
    }

    if (!gender) {
      return res.status(400).json({
        err: "gender is required"
      });
    }

    _emp["default"].create({
      no: no,
      name: name,
      salary: salary,
      role: role,
      age: age,
      gender: gender
    }).then(function (emp) {
      return res.json(emp);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  update: function update(req, res) {
    var id = req.params.id;

    _emp["default"].findOneAndUpdate({
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
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJFbXAiLCJmaW5kIiwidGhlbiIsImVtcCIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsImRlbGV0ZU9uZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwiY3JlYXRlIiwiYm9keSIsIm5vIiwibmFtZSIsInNhbGFyeSIsInJvbGUiLCJhZ2UiLCJnZW5kZXIiLCJ1cGRhdGUiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiJHNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsT0FEVSxtQkFDRkMsR0FERSxFQUNFQyxHQURGLEVBQ007QUFDWkMsb0JBQUlDLElBQUosR0FBV0MsSUFBWCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELEdBQVQsQ0FBRjtBQUFBLEtBQW5CLFdBQ08sVUFBQUUsR0FBRztBQUFBLGFBQUVOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFGO0FBQUEsS0FEVjtBQUVILEdBSlM7QUFLVkUsRUFBQUEsT0FMVSxtQkFLRlQsR0FMRSxFQUtFQyxHQUxGLEVBS007QUFDWixRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDQVIsb0JBQUlVLFFBQUosQ0FBYUYsRUFBYixFQUFpQk4sSUFBakIsQ0FBc0IsVUFBQUMsR0FBRyxFQUFFO0FBQ3ZCLFVBQUcsQ0FBQ0EsR0FBSixFQUFRO0FBQ0osZUFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsVUFBQUEsR0FBRyxFQUFDO0FBQUwsU0FBckIsQ0FBUDtBQUNIOztBQUNELGFBQU9O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QXpCLEtBQVgsRUFDQ2xCLElBREQsQ0FDTSxVQUFBQyxHQUFHO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELEdBQVQsQ0FBRjtBQUFBLEtBRFQsV0FFTyxVQUFBRSxHQUFHO0FBQUEsYUFBRU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUY7QUFBQSxLQUZWO0FBR0gsR0FoRFM7QUFpRFZnQixFQUFBQSxNQWpEVSxrQkFpREh2QixHQWpERyxFQWlEQ0MsR0FqREQsRUFpREs7QUFDWCxRQUFNUyxFQUFFLEdBQUNWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUFwQjs7QUFDQVIsb0JBQUlzQixnQkFBSixDQUFxQjtBQUFDQyxNQUFBQSxHQUFHLEVBQUNmO0FBQUwsS0FBckIsRUFBOEI7QUFBQ2dCLE1BQUFBLElBQUksRUFBQzFCLEdBQUcsQ0FBQ2dCO0FBQVYsS0FBOUIsRUFBOEM7QUFBQyxhQUFJO0FBQUwsS0FBOUMsRUFBMERaLElBQTFELENBQStELFVBQUFDLEdBQUcsRUFBSTtBQUNsRSxVQUFHLENBQUNBLEdBQUosRUFBUTtBQUNKLGVBQU9KLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLEdBQUcsRUFBQztBQUFMLFNBQXJCLENBQVA7QUFDSDs7QUFDRCxhQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU0QsR0FBVCxDQUFQO0FBQ0gsS0FMRCxXQU1PLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBTlY7QUFPSDtBQTFEUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVtcCBmcm9tICcuLi9tb2RlbHMvZW1wLm1vZGVsJztcclxuZXhwb3J0IGRlZmF1bHR7XHJcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xyXG4gICAgICAgIEVtcC5maW5kKCkudGhlbihlbXA9PnJlcy5qc29uKGVtcCkpXHJcbiAgICAgICAgLmNhdGNoKGVycj0+cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgZmluZE9uZShyZXEscmVzKXtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQ7XHJcbiAgICAgICAgRW1wLmZpbmRCeUlkKGlkKS50aGVuKGVtcD0+e1xyXG4gICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiSW52YWxpZCBJRCA6IGVtcCBub3QgZm91bmRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSlcclxuICAgIH0sXHJcbiAgICBkZWxldGVPbmUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xyXG4gICAgICAgIEVtcC5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihlbXA9PntcclxuICAgICAgICAgICAgaWYoIWVtcCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIkludmFsaWQgSUQgOiBlbXAgbm90IGRlbGV0ZWRcIn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+cmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSlcclxuICAgIH0sXHJcbiAgICBjcmVhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgbGV0e25vLG5hbWUsc2FsYXJ5LHJvbGUsYWdlLGdlbmRlcn09cmVxLmJvZHk7XHJcbiAgICAgICAgaWYoIW5hbWUpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIm5hbWUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighc2FsYXJ5KXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJzYWxhcnkgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighbm8pe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIm5vIGlzIHJlcXVpcmVkXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXJvbGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInJvbGUgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighYWdlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJhZ2UgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZ2VuZGVyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJnZW5kZXIgaXMgcmVxdWlyZWRcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFbXAuY3JlYXRlKHtubyxuYW1lLHNhbGFyeSxyb2xlLGFnZSxnZW5kZXJ9KVxyXG4gICAgICAgIC50aGVuKGVtcD0+cmVzLmpzb24oZW1wKSlcclxuICAgICAgICAuY2F0Y2goZXJyPT5yZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUocmVxLHJlcyl7XHJcbiAgICAgICAgY29uc3QgaWQ9cmVxLnBhcmFtcy5pZDtcclxuICAgICAgICBFbXAuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzp0cnVlfSkudGhlbihlbXAgPT4ge1xyXG4gICAgICAgICAgICBpZighZW1wKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZW1wIG5vdCB1cGRhdGVkXCJ9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XHJcbiAgICB9XHJcbn07Il19