const Job = require("../models/Job");

module.exports = {
  createJob: async (req, res) => {
    const newJob = new Job(req.body);
    try {
      await newJob.save();
      res
        .status(201)
        .json({ status: true, message: "Job Created successfully." });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateJob: async (req, res) => {
    const jobId = req.params.id;
    const updated = req.body;
    try {
      const updatedJob = await Job.find(jobId, updated, { new: true });
      if (!updatedJob) {
        return res
          .status(400)
          .json({ status: true, message: "Job Not Found." });
      }
      res
        .status(201)
        .json({ status: true, message: "Job Updated successfully." });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteJob: async (req, res) => {
    const JobId = req.params.id;
    try {
      await Job.findByIdAndDelete(jobId);
      res
        .status(200)
        .json({ status: true, message: "Job deleted successfully." });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getJob: async (req, res) => {
    const jobId = req.params.id;

    try {
      const job = await Job.findById(
        { _id: jobId },
        { createdAt: 0, updatedAt: 0, __v: 0 }
      );
      res.status(200).json(job);
    } catch (error) {
      res.status(500).json(job);
    }
  },
};
