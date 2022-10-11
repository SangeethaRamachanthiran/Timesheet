const { times } = require("async");
const dbModel = require("../model");
const Timesheet = dbModel.timesheets;
require("mysql");

exports.create = (req, res) => {
  console.log("++++++++++++++++++++++++++++");
  console.log(req.body);
  let timesheet =  {
    username: req.body.username,
    date: req.body.date,
    noOfHours: req.body.noOfHours,
    taskname: req.body.taskname
  }
  console.log(timesheet);
  Timesheet.create(timesheet);
  res.send("posted");
};

exports.findAll = (req, res) => {
  Timesheet.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error on this path"
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Timesheet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Timesheet data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Timesheet with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the data with id=" + id
      });
    });
};

exports.findOne = (req, res) => {
  let id = req.params.id;
  Timesheet.findOne({where: {id : id }})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error on this path"
    });
  });
};
exports.update = (req, res) => {
  let timesheetUpdate =  {
    username: req.body.username,
    date: req.body.date,
    noOfHours: req.body.noOfHours,
    taskname: req.body.taskname
  }
  let id = req.params.id;
  Timesheet.update(timesheetUpdate, {where: {id: id} });
  res.send("updated");
};