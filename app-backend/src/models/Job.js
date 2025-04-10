const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: [String], default: undefined },
  industry: { type: String, default: undefined },
  jobType: { type: String, default: undefined },
  salaryRange: { type: String, default: undefined },
  workPreference: { type: String, default: undefined },
  experienceLevel: { type: String, default: undefined },
  visaSponsorship: { type: Boolean, default: undefined },
  applicationUrl: { type: String, default: undefined },
  postingDate: { type: Date, default: undefined },
  expirationDate: { type: Date, default: undefined },
  source: { type: String, required: true },
  jobHash: { type: String, required: true, unique: true },
  expired: { type: Boolean, default: false },
  skills: { type: [String], default: undefined },
}, {
  timestamps: true,
});

jobSchema.index({ jobHash: 1 });
jobSchema.index({ title: 'text', description: 'text' }); // Text index for title and description search
jobSchema.index({ location: 1 });
jobSchema.index({ company: 1 });
jobSchema.index({ industry: 1 });
jobSchema.index({ jobType: 1 });
jobSchema.index({ workPreference: 1 });
jobSchema.index({ experienceLevel: 1 });
jobSchema.index({ skills: 1 });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;