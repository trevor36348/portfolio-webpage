import mongoose, { Schema } from 'mongoose';
import { Experience } from '../types/ExperienceType';

const experienceSchema = new Schema<Experience>({
    companyImage: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    responsibilities: {
        type: [String],
        required: true,
    },
    technologies: {
        type: [String],
    },
});

export default mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
