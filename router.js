const Router = require("koa-router");
const router = new Router();
const {getUsers, addUser} = require("./controllers/user");

router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;