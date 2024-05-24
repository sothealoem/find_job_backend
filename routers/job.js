const router = require("express").Router();
const jobController = require("../controllers/JobController");

router.post("/", jobController.createJob);
router.get("/", jobController.getAllJob);
router.get("/:id", jobController.getJob);
router.put("/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);

module.exports = router;
