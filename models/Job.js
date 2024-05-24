const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    location: { type: String, require: true },
    description: { type: String, require: true },
    agentName: { type: String, require: true },
    salary: { type: String, require: true },
    period: { type: String, require: true },
    hiring: { type: Boolean, require: true, default: false },
    requirements: { type: Array, require: true },
    imageUrl: { type: String, require: true },
    agent: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Job", JobSchema);
