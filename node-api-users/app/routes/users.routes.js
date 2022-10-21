const router = require("express").Router();
const { checkToken } = require("/home/sangeetha/Projects/Timesheet/node-api-users/auth/token.js");
const {
  createUser,
  login,
  getUsers,
  updateUsers,
  deleteUser
} = require("../controller/users.controller.js");
router.get("/", checkToken, getUsers);
router.post("/", createUser);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;