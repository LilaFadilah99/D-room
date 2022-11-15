const router = require("express").Router();
const userRouter = require("./user");
const accomodationRouter = require("./accomodation");
const ApiController = require("../controllers/ApiController");

router.use("/user", userRouter);
router.use("/accomodation", accomodationRouter);
router.get("/imageApi/:id", ApiController.getImageApi);
router.get("/event/:id", ApiController.handlegetEventApi);

module.exports = router;
