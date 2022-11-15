const router = require("express").Router();
const UserController = require("../controllers/UserController");
const { authentication, authorization } = require("../middlewares/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authentication);
router.get("/", UserController.getUser);
router.get("/:id", authorization, UserController.getUserById);
router.put("/:id", authorization, UserController.updateUser);
router.delete("/:id", authorization, UserController.deleteUser);

module.exports = router;
