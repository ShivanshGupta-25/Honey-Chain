const express = require("express");

const {
  createHive,
  getHives,
  getHiveById,
  updateHive,
  deleteHive,
} = require("../controllers/hiveController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect);
router.use(authorize("beekeeper"));

router
  .route("/")
  .get(getHives)
  .post(createHive);

router
  .route("/:id")
  .get(getHiveById)
  .put(updateHive)
  .delete(deleteHive);

module.exports = router;