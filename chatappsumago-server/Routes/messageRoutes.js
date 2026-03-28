const express = require("express");
const {
  allMessages,
  sendMessage,
  deleteMessage,
} = require("../Controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);
router.route("/unsend").post(protect, deleteMessage);
router.route("/:messageId/delete").delete(protect, deleteMessage);

module.exports = router;
