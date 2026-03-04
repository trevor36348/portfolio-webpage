import mongoose from 'mongoose';

const keyFeatureSchema = new mongoose.Schema({
    sectionTitle: { type: String, required: true },
    sectionText: { type: [String], required: true },
});

const projectSchema = new mongoose.Schema({
    slug: {
        type: String,
    },
    image: {
        type: String,
    },
    title: {
        type: String,
    },
    introduction: {
        type: String,
    },
    technologies: {
        type: [String],
    },
    projectURL: {
        type: String,
    },
    siteURL: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
    },
    isFeatured: {
        type: Boolean,
    },
    overview: {
        type: String,
    },
    keyFeatures: {
        type: [keyFeatureSchema],
        default: [],
    },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
