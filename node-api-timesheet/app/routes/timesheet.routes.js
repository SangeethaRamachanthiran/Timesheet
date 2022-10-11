module.exports = app => {
    const timesheets = require("../controller/timesheet.controller.js");
  
    let router = require("express").Router();
  
    router.get("/:id", timesheets.findOne);
    router.post("/", timesheets.create);
    router.get("/", timesheets.findAll);
    router.delete("/:id", timesheets.delete);
    router.put("/:id", timesheets.update);
    app.use('/api/timesheets', router);
  };
  
  