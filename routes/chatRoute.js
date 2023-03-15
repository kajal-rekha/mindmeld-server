const {
  createChat,
  findAllChats,
  findASingleChat,
} = require("../controllers/chatController");

// router
const router = express.Route();

// routes
router.post("/", createChat);
router.get("/:userId", findAllChats);
router.get("/find/:firstId/:secondId", findASingleChat);

module.exports = router;
