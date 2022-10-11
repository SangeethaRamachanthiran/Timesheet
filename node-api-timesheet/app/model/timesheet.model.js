
module.exports = (sequelize, Sequelize) => {
    const Timesheet = sequelize.define("timesheet", {
      username: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      noOfHours: {
        type: Sequelize.INTEGER
      },
      taskname: {
        type: Sequelize.STRING
      }
    });
  
    return Timesheet;
  };